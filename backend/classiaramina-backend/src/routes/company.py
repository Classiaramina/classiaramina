from flask import Blueprint, request, jsonify
from src.models.user import db
from src.models.company import Company
from datetime import datetime

company_bp = Blueprint('company', __name__)

@company_bp.route('/companies', methods=['GET'])
def get_companies():
    """Listar todas as empresas ativas"""
    try:
        categoria = request.args.get('categoria')
        query = Company.query.filter_by(status='Ativo')
        
        if categoria and categoria != 'Todas':
            query = query.filter_by(categoria=categoria)
        
        companies = query.all()
        return jsonify([company.to_dict() for company in companies]), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@company_bp.route('/companies/<int:company_id>', methods=['GET'])
def get_company(company_id):
    """Obter uma empresa específica"""
    try:
        company = Company.query.get_or_404(company_id)
        return jsonify(company.to_dict()), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@company_bp.route('/companies', methods=['POST'])
def create_company():
    """Criar uma nova empresa"""
    try:
        data = request.get_json()
        
        # Validação básica
        required_fields = ['nome', 'endereco', 'telefone', 'email', 'categoria', 'user_id']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Campo {field} é obrigatório'}), 400
        
        company = Company(
            nome=data['nome'],
            descricao=data.get('descricao'),
            endereco=data['endereco'],
            telefone=data['telefone'],
            email=data['email'],
            site=data.get('site'),
            logo_url=data.get('logo_url'),
            categoria=data['categoria'],
            user_id=data['user_id']
        )
        
        db.session.add(company)
        db.session.commit()
        
        return jsonify(company.to_dict()), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@company_bp.route('/companies/<int:company_id>', methods=['PUT'])
def update_company(company_id):
    """Atualizar uma empresa"""
    try:
        company = Company.query.get_or_404(company_id)
        data = request.get_json()
        
        # Atualizar campos permitidos
        allowed_fields = ['nome', 'descricao', 'endereco', 'telefone', 'email', 'site', 'logo_url', 'categoria', 'status']
        for field in allowed_fields:
            if field in data:
                setattr(company, field, data[field])
        
        db.session.commit()
        return jsonify(company.to_dict()), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@company_bp.route('/companies/<int:company_id>', methods=['DELETE'])
def delete_company(company_id):
    """Deletar uma empresa (soft delete)"""
    try:
        company = Company.query.get_or_404(company_id)
        company.status = 'Inativo'
        db.session.commit()
        return jsonify({'message': 'Empresa removida com sucesso'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@company_bp.route('/companies/categories', methods=['GET'])
def get_categories():
    """Listar todas as categorias de empresas"""
    try:
        categories = db.session.query(Company.categoria).distinct().all()
        category_list = [cat[0] for cat in categories if cat[0]]
        return jsonify(category_list), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

