from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from src.models.user import db

class Payment(db.Model):
    __tablename__ = 'payments'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    tipo_entidade = db.Column(db.String(50), nullable=False)  # Empresa, Serviço, Vaga
    entidade_id = db.Column(db.Integer, nullable=False)
    valor = db.Column(db.Float, nullable=False)
    data_pagamento = db.Column(db.DateTime, default=datetime.utcnow)
    status = db.Column(db.String(20), default='Pendente')  # Aprovado, Pendente, Recusado
    metodo_pagamento = db.Column(db.String(50), nullable=True)  # PIX, Cartão, Boleto
    transacao_id = db.Column(db.String(100), unique=True, nullable=True)
    plano = db.Column(db.String(50), nullable=True)  # Básico, Profissional, Premium
    
    # Relacionamento com User
    user = db.relationship('User', backref=db.backref('payments', lazy=True))

    def __repr__(self):
        return f'<Payment {self.id} - {self.valor}>'

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'tipo_entidade': self.tipo_entidade,
            'entidade_id': self.entidade_id,
            'valor': self.valor,
            'data_pagamento': self.data_pagamento.isoformat() if self.data_pagamento else None,
            'status': self.status,
            'metodo_pagamento': self.metodo_pagamento,
            'transacao_id': self.transacao_id,
            'plano': self.plano
        }

