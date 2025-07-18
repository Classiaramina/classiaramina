from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from src.models.user import db

class Service(db.Model):
    __tablename__ = 'services'
    
    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(200), nullable=False)
    descricao = db.Column(db.Text, nullable=True)
    categoria = db.Column(db.String(100), nullable=False)
    endereco = db.Column(db.String(300), nullable=False)
    telefone = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(120), nullable=True)
    imagem_url = db.Column(db.String(300), nullable=True)
    preco = db.Column(db.String(100), nullable=True)
    avaliacao = db.Column(db.Float, default=0.0)
    num_avaliacoes = db.Column(db.Integer, default=0)
    data_cadastro = db.Column(db.DateTime, default=datetime.utcnow)
    status = db.Column(db.String(20), default='Ativo')  # Ativo, Inativo, Pendente
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    
    # Relacionamento com User
    user = db.relationship('User', backref=db.backref('services', lazy=True))

    def __repr__(self):
        return f'<Service {self.titulo}>'

    def to_dict(self):
        return {
            'id': self.id,
            'titulo': self.titulo,
            'descricao': self.descricao,
            'categoria': self.categoria,
            'endereco': self.endereco,
            'telefone': self.telefone,
            'email': self.email,
            'imagem_url': self.imagem_url,
            'preco': self.preco,
            'avaliacao': self.avaliacao,
            'num_avaliacoes': self.num_avaliacoes,
            'data_cadastro': self.data_cadastro.isoformat() if self.data_cadastro else None,
            'status': self.status,
            'user_id': self.user_id
        }

