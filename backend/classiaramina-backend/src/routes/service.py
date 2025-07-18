from flask import Blueprint, request, jsonify
from src.models.user import db
from src.models.service import Service
from datetime import datetime

service_bp = Blueprint('service', __name__)

@service_bp.route('/services', methods=['GET'])
def get_services():
    """Listar todos os serviços ativos"""
    try:
        categoria = request.args.get('categoria')
        query = Service.query.filter_by(status='Ativo')
        
        if categoria and categoria != 'Todos':
            query = query.filter_by(categoria=categoria)
        
        services = query.order_by(Service.avaliacao.desc()).all()
        return jsonify([service.to_dict() for service in services]), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@service_bp.route('/services/<int:service_id>', methods=['GET'])
def get_service(service_id):
    """Obter um serviço específico"""
    try:
        service = Service.query.get_or_404(service_id)
        return jsonify(service.to_dict()), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@service_bp.route('/services', methods=['POST'])
def create_service():
    """Criar um novo serviço"""
    try:
        data = request.get_json()
        
        # Validação básica
        required_fields = ['titulo', 'categoria', 'endereco', 'telefone', 'user_id']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Campo {field} é obrigatório'}), 400
        
        service = Service(
            titulo=data['titulo'],
            descricao=data.get('descricao'),
            categoria=data['categoria'],
            endereco=data['endereco'],
            telefone=data['telefone'],
            email=data.get('email'),
            imagem_url=data.get('imagem_url'),
            preco=data.get('preco'),
            user_id=data['user_id']
        )
        
        db.session.add(service)
        db.session.commit()
        
        return jsonify(service.to_dict()), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@service_bp.route('/services/<int:service_id>', methods=['PUT'])
def update_service(service_id):
    """Atualizar um serviço"""
    try:
        service = Service.query.get_or_404(service_id)
        data = request.get_json()
        
        # Atualizar campos permitidos
        allowed_fields = ['titulo', 'descricao', 'categoria', 'endereco', 'telefone', 'email', 'imagem_url', 'preco', 'status']
        for field in allowed_fields:
            if field in data:
                setattr(service, field, data[field])
        
        db.session.commit()
        return jsonify(service.to_dict()), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@service_bp.route('/services/<int:service_id>', methods=['DELETE'])
def delete_service(service_id):
    """Deletar um serviço (soft delete)"""
    try:
        service = Service.query.get_or_404(service_id)
        service.status = 'Inativo'
        db.session.commit()
        return jsonify({'message': 'Serviço removido com sucesso'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@service_bp.route('/services/<int:service_id>/rating', methods=['POST'])
def rate_service(service_id):
    """Avaliar um serviço"""
    try:
        service = Service.query.get_or_404(service_id)
        data = request.get_json()
        
        if 'rating' not in data or not (1 <= data['rating'] <= 5):
            return jsonify({'error': 'Rating deve ser entre 1 e 5'}), 400
        
        # Calcular nova média (simplificado)
        total_rating = service.avaliacao * service.num_avaliacoes + data['rating']
        service.num_avaliacoes += 1
        service.avaliacao = round(total_rating / service.num_avaliacoes, 1)
        
        db.session.commit()
        return jsonify(service.to_dict()), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@service_bp.route('/services/categories', methods=['GET'])
def get_categories():
    """Listar todas as categorias de serviços"""
    try:
        categories = db.session.query(Service.categoria).distinct().all()
        category_list = [cat[0] for cat in categories if cat[0]]
        return jsonify(category_list), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

