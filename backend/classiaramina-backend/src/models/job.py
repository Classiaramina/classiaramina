from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from src.models.user import db

class Job(db.Model):
    __tablename__ = 'jobs'
    
    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(200), nullable=False)
    empresa = db.Column(db.String(200), nullable=False)
    tipo = db.Column(db.String(50), nullable=False)  # CLT, Freelancer, Estágio, Temporário
    localizacao = db.Column(db.String(200), nullable=False)
    salario = db.Column(db.String(100), nullable=True)
    descricao = db.Column(db.Text, nullable=True)
    requisitos = db.Column(db.Text, nullable=True)  # JSON string
    beneficios = db.Column(db.Text, nullable=True)  # JSON string
    carga_horaria = db.Column(db.String(50), nullable=True)
    data_publicacao = db.Column(db.DateTime, default=datetime.utcnow)
    data_limite = db.Column(db.DateTime, nullable=True)
    status = db.Column(db.String(20), default='Ativo')  # Ativo, Inativo, Expirado
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    
    # Relacionamento com User
    user = db.relationship('User', backref=db.backref('jobs', lazy=True))

    def __repr__(self):
        return f'<Job {self.titulo}>'

    def to_dict(self):
        import json
        return {
            'id': self.id,
            'titulo': self.titulo,
            'empresa': self.empresa,
            'tipo': self.tipo,
            'localizacao': self.localizacao,
            'salario': self.salario,
            'descricao': self.descricao,
            'requisitos': json.loads(self.requisitos) if self.requisitos else [],
            'beneficios': json.loads(self.beneficios) if self.beneficios else [],
            'carga_horaria': self.carga_horaria,
            'data_publicacao': self.data_publicacao.isoformat() if self.data_publicacao else None,
            'data_limite': self.data_limite.isoformat() if self.data_limite else None,
            'status': self.status,
            'user_id': self.user_id
        }

