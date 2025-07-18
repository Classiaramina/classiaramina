from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from src.models.user import db

class Company(db.Model):
    __tablename__ = 'companies'
    
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(200), nullable=False)
    descricao = db.Column(db.Text, nullable=True)
    endereco = db.Column(db.String(300), nullable=False)
    telefone = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    site = db.Column(db.String(200), nullable=True)
    logo_url = db.Column(db.String(300), nullable=True)
    categoria = db.Column(db.String(100), nullable=False)
    data_cadastro = db.Column(db.DateTime, default=datetime.utcnow)
    status = db.Column(db.String(20), default='Ativo')  # Ativo, Inativo, Pendente
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    
    # Relacionamento com User
    user = db.relationship('User', backref=db.backref('companies', lazy=True))

    def __repr__(self):
        return f'<Company {self.nome}>'

    def to_dict(self):
        return {
            'id': self.id,
            'nome': self.nome,
            'descricao': self.descricao,
            'endereco': self.endereco,
            'telefone': self.telefone,
            'email': self.email,
            'site': self.site,
            'logo_url': self.logo_url,
            'categoria': self.categoria,
            'data_cadastro': self.data_cadastro.isoformat() if self.data_cadastro else None,
            'status': self.status,
            'user_id': self.user_id
        }

