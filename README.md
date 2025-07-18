# ClassiAramina - Plataforma de Classificados e Serviços

## 📋 Sobre o Projeto

O **ClassiAramina** é uma plataforma completa de classificados e serviços locais desenvolvida especificamente para a cidade de Aramina e região. O sistema conecta empresas, prestadores de serviços e pessoas da comunidade, facilitando negócios e oportunidades locais.

## 🚀 Funcionalidades Principais

### 🏢 Para Empresas
- **Cadastro de Empresas** - Perfil completo com informações, fotos e contatos
- **Categorização** - Organização por setores (Alimentação, Automotivo, Saúde, etc.)
- **Planos de Assinatura** - Básico, Profissional e Premium
- **Destaque nas Buscas** - Maior visibilidade para assinantes

### 👨‍💼 Para Prestadores de Serviços
- **Anúncios de Serviços** - Divulgação de serviços profissionais
- **Sistema de Avaliações** - Feedback da comunidade
- **Filtros por Categoria** - Beleza, Casa, Automotivo, Saúde, etc.
- **Preços e Contatos** - Informações completas para clientes

### 💼 Oportunidades de Emprego
- **Vagas de Trabalho** - CLT, Freelancer, Estágio, Temporário
- **Banco de Currículos** - Profissionais disponíveis
- **Filtros Avançados** - Por tipo, salário, localização
- **Sistema de Candidaturas** - Processo simplificado

### 🎛️ Painel Administrativo
- **Dashboard Completo** - Estatísticas e métricas
- **Gerenciamento de Empresas** - CRUD completo
- **Controle de Usuários** - Administração de contas
- **Relatórios** - Análises detalhadas
- **Sistema de Aprovação** - Moderação de conteúdo

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** - Framework JavaScript moderno
- **Vite** - Build tool rápido e eficiente
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones modernos
- **shadcn/ui** - Componentes UI elegantes

### Backend
- **Flask** - Framework web Python
- **SQLAlchemy** - ORM para banco de dados
- **SQLite** - Banco de dados leve e eficiente
- **Flask-CORS** - Configuração de CORS

### Arquitetura
- **API REST** - Comunicação frontend/backend
- **SPA (Single Page Application)** - Experiência fluida
- **Responsive Design** - Compatível com mobile
- **Modular Structure** - Código organizado e escalável

## 📁 Estrutura do Projeto

```
ClassiAramina/
├── frontend/
│   └── classiaramina-frontend/
│       ├── src/
│       │   ├── components/          # Componentes React
│       │   │   ├── Admin/          # Painel administrativo
│       │   │   └── ui/             # Componentes UI
│       │   ├── services/           # Serviços de API
│       │   └── assets/             # Recursos estáticos
│       ├── public/                 # Arquivos públicos
│       └── package.json            # Dependências frontend
├── backend/
│   └── classiaramina-backend/
│       ├── src/
│       │   ├── models/             # Modelos de dados
│       │   ├── routes/             # Rotas da API
│       │   ├── database/           # Banco de dados
│       │   └── main.py             # Aplicação principal
│       └── requirements.txt        # Dependências backend
├── docs/
│   └── data_model.md              # Documentação do modelo
└── README.md                      # Este arquivo
```

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Python 3.11+
- Node.js 20+
- pnpm (ou npm)

### 1. Backend (Flask)
```bash
cd ClassiAramina/backend/classiaramina-backend
source venv/bin/activate  # Linux/Mac
python src/main.py
```
O backend estará disponível em: http://localhost:5000

### 2. Frontend (React)
```bash
cd ClassiAramina/frontend/classiaramina-frontend
pnpm install
pnpm run dev --host
```
O frontend estará disponível em: http://localhost:5173

### 3. Dados de Exemplo
Para popular o banco com dados de exemplo, acesse:
```
POST http://localhost:5000/api/seed-data
```

## 📊 APIs Disponíveis

### Empresas
- `GET /api/companies` - Listar empresas
- `POST /api/companies` - Criar empresa
- `GET /api/companies/{id}` - Buscar empresa
- `PUT /api/companies/{id}` - Atualizar empresa
- `DELETE /api/companies/{id}` - Excluir empresa

### Serviços
- `GET /api/services` - Listar serviços
- `POST /api/services` - Criar serviço
- `GET /api/services/{id}` - Buscar serviço
- `PUT /api/services/{id}` - Atualizar serviço
- `DELETE /api/services/{id}` - Excluir serviço

### Vagas de Emprego
- `GET /api/jobs` - Listar vagas
- `POST /api/jobs` - Criar vaga
- `GET /api/jobs/{id}` - Buscar vaga
- `PUT /api/jobs/{id}` - Atualizar vaga
- `DELETE /api/jobs/{id}` - Excluir vaga

### Usuários
- `GET /api/users` - Listar usuários
- `POST /api/users` - Criar usuário
- `GET /api/users/{id}` - Buscar usuário
- `PUT /api/users/{id}` - Atualizar usuário
- `DELETE /api/users/{id}` - Excluir usuário

## 🎨 Design e UX

### Paleta de Cores
- **Primária**: Azul (#3B82F6)
- **Secundária**: Amarelo (#F59E0B)
- **Sucesso**: Verde (#10B981)
- **Erro**: Vermelho (#EF4444)
- **Neutro**: Cinza (#6B7280)

### Responsividade
- **Mobile First** - Design otimizado para dispositivos móveis
- **Breakpoints** - sm, md, lg, xl, 2xl
- **Touch Friendly** - Botões e elementos adequados para toque

## 🔧 Configurações

### Variáveis de Ambiente
```bash
# Backend
FLASK_ENV=development
SECRET_KEY=asdf#FGSgvasgf$5$WGT
DATABASE_URL=sqlite:///database/app.db

# Frontend
VITE_API_BASE_URL=http://localhost:5000/api
```

### CORS
O backend está configurado para aceitar requisições de qualquer origem durante o desenvolvimento. Para produção, configure domínios específicos.

## 📈 Próximos Passos

### Funcionalidades Futuras
- [ ] Sistema de autenticação JWT
- [ ] Upload de imagens para empresas/serviços
- [ ] Sistema de mensagens internas
- [ ] Integração com WhatsApp Business
- [ ] Sistema de pagamentos online
- [ ] Notificações push
- [ ] App mobile nativo
- [ ] Sistema de reviews e comentários

### Melhorias Técnicas
- [ ] Testes automatizados (Jest, Pytest)
- [ ] CI/CD pipeline
- [ ] Monitoramento e logs
- [ ] Cache Redis
- [ ] CDN para imagens
- [ ] Backup automático
- [ ] SSL/HTTPS

## 🚀 Deploy em Produção

### Opções de Deploy
1. **Vercel** (Frontend) + **Railway** (Backend)
2. **Netlify** (Frontend) + **Heroku** (Backend)
3. **VPS** com Docker
4. **AWS** (EC2 + RDS)

### Preparação para Deploy
```bash
# Frontend - Build de produção
cd frontend/classiaramina-frontend
pnpm run build

# Backend - Configurar variáveis de produção
export FLASK_ENV=production
export DATABASE_URL=postgresql://...
```

## 📞 Suporte

Para dúvidas, sugestões ou suporte técnico:
- **Email**: contato@classiaramina.com
- **WhatsApp**: (16) 99445-4641
- **Horário**: Segunda a Sexta, 8h às 18h

## 📄 Licença

Este projeto foi desenvolvido especificamente para a cidade de Aramina. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para a comunidade de Aramina**

