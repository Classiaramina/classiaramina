from flask import Blueprint, jsonify
from src.models.user import db, User
from src.models.company import Company
from src.models.service import Service
from src.models.job import Job
from src.models.payment import Payment
from datetime import datetime, timedelta
import json

seed_bp = Blueprint('seed', __name__)

@seed_bp.route('/seed-data', methods=['POST'])
def seed_data():
    """Criar dados de exemplo para o banco de dados"""
    try:
        # Limpar dados existentes
        db.session.query(Payment).delete()
        db.session.query(Job).delete()
        db.session.query(Service).delete()
        db.session.query(Company).delete()
        db.session.query(User).delete()
        
        # Criar usuários de exemplo
        users = [
            User(nome='João Silva', email='joao@email.com', tipo_usuario='Empresa'),
            User(nome='Maria Santos', email='maria@email.com', tipo_usuario='Prestador'),
            User(nome='Carlos Oliveira', email='carlos@email.com', tipo_usuario='Empresa'),
            User(nome='Ana Costa', email='ana@email.com', tipo_usuario='Prestador'),
            User(nome='Pedro Almeida', email='pedro@email.com', tipo_usuario='Comum')
        ]
        
        for user in users:
            user.set_password('123456')
            db.session.add(user)
        
        db.session.commit()
        
        # Criar empresas de exemplo
        companies = [
            Company(
                nome='Padaria Central',
                descricao='Pães frescos, doces e salgados todos os dias. Tradição familiar há 30 anos.',
                endereco='Rua Principal, 123 - Centro',
                telefone='(16) 3333-1111',
                email='contato@padariacentral.com',
                site='www.padariacentral.com',
                categoria='Alimentação',
                status='Ativo',
                user_id=users[0].id
            ),
            Company(
                nome='Auto Mecânica Silva',
                descricao='Serviços completos para seu veículo. Mecânica geral, elétrica e pintura.',
                endereco='Av. Industrial, 456',
                telefone='(16) 3333-2222',
                email='silva@automecanicanica.com',
                categoria='Automotivo',
                status='Ativo',
                user_id=users[2].id
            ),
            Company(
                nome='Farmácia Saúde',
                descricao='Medicamentos, produtos de higiene e beleza. Atendimento farmacêutico especializado.',
                endereco='Rua da Saúde, 789',
                telefone='(16) 3333-3333',
                email='farmacia@saude.com',
                site='www.farmaciasaude.com.br',
                categoria='Saúde',
                status='Ativo',
                user_id=users[0].id
            ),
            Company(
                nome='Loja de Roupas Fashion',
                descricao='Roupas femininas e masculinas das melhores marcas. Sempre na moda.',
                endereco='Rua do Comércio, 321',
                telefone='(16) 3333-4444',
                email='contato@fashionloja.com',
                categoria='Moda',
                status='Pendente',
                user_id=users[2].id
            )
        ]
        
        for company in companies:
            db.session.add(company)
        
        db.session.commit()
        
        # Criar serviços de exemplo
        services = [
            Service(
                titulo='Barbearia do João',
                descricao='Cortes masculinos modernos e tradicionais. Barba, bigode e tratamentos capilares.',
                categoria='Beleza',
                endereco='Rua das Flores, 123',
                telefone='(16) 99999-1111',
                preco='R$ 25,00',
                avaliacao=4.8,
                num_avaliacoes=45,
                status='Ativo',
                user_id=users[1].id
            ),
            Service(
                titulo='Encanador 24h',
                descricao='Serviços de encanamento residencial e comercial. Emergências 24 horas.',
                categoria='Casa',
                endereco='Atende toda Aramina',
                telefone='(16) 99999-2222',
                preco='A partir de R$ 50,00',
                avaliacao=4.9,
                num_avaliacoes=32,
                status='Ativo',
                user_id=users[3].id
            ),
            Service(
                titulo='Limpeza Residencial',
                descricao='Limpeza completa de residências. Diarista, faxineira e limpeza pós-obra.',
                categoria='Casa',
                endereco='Atende Aramina e região',
                telefone='(16) 99999-3333',
                preco='R$ 80,00/dia',
                avaliacao=4.7,
                num_avaliacoes=28,
                status='Ativo',
                user_id=users[1].id
            ),
            Service(
                titulo='Mecânico Móvel',
                descricao='Serviços automotivos no local. Troca de óleo, bateria e pequenos reparos.',
                categoria='Automotivo',
                endereco='Atendimento domiciliar',
                telefone='(16) 99999-4444',
                preco='Consulte valores',
                avaliacao=4.6,
                num_avaliacoes=19,
                status='Ativo',
                user_id=users[3].id
            ),
            Service(
                titulo='Cuidadora de Idosos',
                descricao='Cuidados especializados para idosos. Acompanhamento médico e atividades diárias.',
                categoria='Saúde',
                endereco='Aramina e região',
                telefone='(16) 99999-5555',
                preco='R$ 120,00/dia',
                avaliacao=5.0,
                num_avaliacoes=12,
                status='Ativo',
                user_id=users[1].id
            )
        ]
        
        for service in services:
            db.session.add(service)
        
        db.session.commit()
        
        # Criar vagas de exemplo
        jobs = [
            Job(
                titulo='Vendedor(a)',
                empresa='Loja Fashion',
                tipo='CLT',
                localizacao='Centro - Aramina',
                salario='R$ 1.500,00 + comissões',
                descricao='Vaga para vendedor(a) com experiência em atendimento ao cliente. Conhecimento em moda é um diferencial.',
                requisitos=json.dumps(['Ensino médio completo', 'Experiência em vendas', 'Boa comunicação']),
                beneficios=json.dumps(['Vale transporte', 'Vale alimentação', 'Comissões']),
                carga_horaria='44h semanais',
                data_limite=datetime.now() + timedelta(days=30),
                status='Ativo',
                user_id=users[2].id
            ),
            Job(
                titulo='Mecânico Automotivo',
                empresa='Auto Mecânica Silva',
                tipo='CLT',
                localizacao='Zona Industrial - Aramina',
                salario='R$ 2.200,00',
                descricao='Procuramos mecânico com experiência em manutenção preventiva e corretiva de veículos leves.',
                requisitos=json.dumps(['Curso técnico em mecânica', 'Experiência mínima de 2 anos', 'CNH categoria B']),
                beneficios=json.dumps(['Vale transporte', 'Vale alimentação', 'Plano de saúde']),
                carga_horaria='44h semanais',
                data_limite=datetime.now() + timedelta(days=25),
                status='Ativo',
                user_id=users[2].id
            ),
            Job(
                titulo='Auxiliar de Padaria',
                empresa='Padaria Central',
                tipo='CLT',
                localizacao='Centro - Aramina',
                salario='R$ 1.320,00',
                descricao='Vaga para auxiliar de padaria. Responsável por produção de pães, doces e atendimento ao cliente.',
                requisitos=json.dumps(['Ensino fundamental completo', 'Disponibilidade para trabalhar de madrugada', 'Experiência desejável']),
                beneficios=json.dumps(['Vale transporte', 'Vale alimentação', 'Cesta básica']),
                carga_horaria='44h semanais',
                data_limite=datetime.now() + timedelta(days=20),
                status='Ativo',
                user_id=users[0].id
            ),
            Job(
                titulo='Freelancer - Designer Gráfico',
                empresa='Agência Digital',
                tipo='Freelancer',
                localizacao='Remoto',
                salario='R$ 50,00/hora',
                descricao='Procuramos designer gráfico freelancer para projetos pontuais. Criação de materiais publicitários.',
                requisitos=json.dumps(['Portfolio comprovado', 'Domínio em Photoshop e Illustrator', 'Criatividade']),
                beneficios=json.dumps(['Flexibilidade de horário', 'Trabalho remoto', 'Projetos variados']),
                carga_horaria='Flexível',
                data_limite=datetime.now() + timedelta(days=35),
                status='Ativo',
                user_id=users[0].id
            ),
            Job(
                titulo='Estagiário(a) Administrativo',
                empresa='Escritório Contábil',
                tipo='Estágio',
                localizacao='Centro - Aramina',
                salario='R$ 800,00 + auxílios',
                descricao='Oportunidade de estágio na área administrativa. Apoio em rotinas contábeis e atendimento.',
                requisitos=json.dumps(['Cursando administração ou contabilidade', 'Conhecimento em Excel', 'Proatividade']),
                beneficios=json.dumps(['Vale transporte', 'Vale alimentação', 'Experiência profissional']),
                carga_horaria='30h semanais',
                data_limite=datetime.now() + timedelta(days=15),
                status='Ativo',
                user_id=users[2].id
            )
        ]
        
        for job in jobs:
            db.session.add(job)
        
        db.session.commit()
        
        # Criar pagamentos de exemplo
        payments = [
            Payment(
                user_id=users[0].id,
                tipo_entidade='Empresa',
                entidade_id=companies[0].id,
                valor=59.90,
                status='Aprovado',
                metodo_pagamento='PIX',
                transacao_id='TXN001',
                plano='Profissional'
            ),
            Payment(
                user_id=users[2].id,
                tipo_entidade='Empresa',
                entidade_id=companies[1].id,
                valor=29.90,
                status='Aprovado',
                metodo_pagamento='Cartão',
                transacao_id='TXN002',
                plano='Básico'
            ),
            Payment(
                user_id=users[1].id,
                tipo_entidade='Serviço',
                entidade_id=services[0].id,
                valor=39.90,
                status='Pendente',
                metodo_pagamento='Boleto',
                transacao_id='TXN003',
                plano='Profissional'
            )
        ]
        
        for payment in payments:
            db.session.add(payment)
        
        db.session.commit()
        
        return jsonify({
            'message': 'Dados de exemplo criados com sucesso!',
            'users': len(users),
            'companies': len(companies),
            'services': len(services),
            'jobs': len(jobs),
            'payments': len(payments)
        }), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

