from flask import Blueprint, request, jsonify
from src.models.user import db
from src.models.job import Job
from datetime import datetime
import json

job_bp = Blueprint('job', __name__)

@job_bp.route('/jobs', methods=['GET'])
def get_jobs():
    """Listar todas as vagas ativas"""
    try:
        tipo = request.args.get('tipo')
        query = Job.query.filter_by(status='Ativo')
        
        if tipo and tipo != 'Todos':
            query = query.filter_by(tipo=tipo)
        
        jobs = query.order_by(Job.data_publicacao.desc()).all()
        return jsonify([job.to_dict() for job in jobs]), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@job_bp.route('/jobs/<int:job_id>', methods=['GET'])
def get_job(job_id):
    """Obter uma vaga específica"""
    try:
        job = Job.query.get_or_404(job_id)
        return jsonify(job.to_dict()), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@job_bp.route('/jobs', methods=['POST'])
def create_job():
    """Criar uma nova vaga"""
    try:
        data = request.get_json()
        
        # Validação básica
        required_fields = ['titulo', 'empresa', 'tipo', 'localizacao', 'user_id']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Campo {field} é obrigatório'}), 400
        
        # Converter listas para JSON strings
        requisitos = json.dumps(data.get('requisitos', []))
        beneficios = json.dumps(data.get('beneficios', []))
        
        # Converter data_limite se fornecida
        data_limite = None
        if 'data_limite' in data and data['data_limite']:
            try:
                data_limite = datetime.fromisoformat(data['data_limite'].replace('Z', '+00:00'))
            except ValueError:
                return jsonify({'error': 'Formato de data inválido'}), 400
        
        job = Job(
            titulo=data['titulo'],
            empresa=data['empresa'],
            tipo=data['tipo'],
            localizacao=data['localizacao'],
            salario=data.get('salario'),
            descricao=data.get('descricao'),
            requisitos=requisitos,
            beneficios=beneficios,
            carga_horaria=data.get('carga_horaria'),
            data_limite=data_limite,
            user_id=data['user_id']
        )
        
        db.session.add(job)
        db.session.commit()
        
        return jsonify(job.to_dict()), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@job_bp.route('/jobs/<int:job_id>', methods=['PUT'])
def update_job(job_id):
    """Atualizar uma vaga"""
    try:
        job = Job.query.get_or_404(job_id)
        data = request.get_json()
        
        # Atualizar campos permitidos
        allowed_fields = ['titulo', 'empresa', 'tipo', 'localizacao', 'salario', 'descricao', 'carga_horaria', 'status']
        for field in allowed_fields:
            if field in data:
                setattr(job, field, data[field])
        
        # Atualizar listas se fornecidas
        if 'requisitos' in data:
            job.requisitos = json.dumps(data['requisitos'])
        if 'beneficios' in data:
            job.beneficios = json.dumps(data['beneficios'])
        
        # Atualizar data_limite se fornecida
        if 'data_limite' in data and data['data_limite']:
            try:
                job.data_limite = datetime.fromisoformat(data['data_limite'].replace('Z', '+00:00'))
            except ValueError:
                return jsonify({'error': 'Formato de data inválido'}), 400
        
        db.session.commit()
        return jsonify(job.to_dict()), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@job_bp.route('/jobs/<int:job_id>', methods=['DELETE'])
def delete_job(job_id):
    """Deletar uma vaga (soft delete)"""
    try:
        job = Job.query.get_or_404(job_id)
        job.status = 'Inativo'
        db.session.commit()
        return jsonify({'message': 'Vaga removida com sucesso'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@job_bp.route('/jobs/types', methods=['GET'])
def get_job_types():
    """Listar todos os tipos de vagas"""
    try:
        types = db.session.query(Job.tipo).distinct().all()
        type_list = [t[0] for t in types if t[0]]
        return jsonify(type_list), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

