# 🚀 Guia de Deploy - ClassiAramina

## 📋 Visão Geral

Este guia apresenta diferentes opções para fazer o deploy do ClassiAramina em produção, desde soluções simples até configurações mais robustas.

## 🌟 Opção 1: Deploy Rápido (Recomendado)

### Frontend: Vercel
### Backend: Railway

Esta é a opção mais simples e rápida para colocar o site no ar.

#### 🎨 Deploy do Frontend (Vercel)

1. **Preparar o build**
```bash
cd ClassiAramina/frontend/classiaramina-frontend
pnpm run build
```

2. **Criar conta na Vercel**
- Acesse: https://vercel.com
- Faça login com GitHub/GitLab

3. **Deploy via CLI**
```bash
npm i -g vercel
vercel --prod
```

4. **Configurar variáveis de ambiente**
```bash
# No dashboard da Vercel
VITE_API_BASE_URL=https://seu-backend.railway.app/api
```

#### 🔧 Deploy do Backend (Railway)

1. **Criar conta na Railway**
- Acesse: https://railway.app
- Conecte com GitHub

2. **Preparar o projeto**
```bash
# Criar Procfile na raiz do backend
echo "web: python src/main.py" > ClassiAramina/backend/classiaramina-backend/Procfile

# Criar requirements.txt
pip freeze > ClassiAramina/backend/classiaramina-backend/requirements.txt
```

3. **Configurar variáveis de ambiente**
```bash
FLASK_ENV=production
PORT=5000
DATABASE_URL=sqlite:///database/app.db
```

4. **Deploy**
- Conecte o repositório
- Selecione a pasta do backend
- Deploy automático

## 🏗️ Opção 2: VPS com Docker

### Preparação

1. **Criar Dockerfile para Backend**
```dockerfile
# ClassiAramina/backend/Dockerfile
FROM python:3.11-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .
EXPOSE 5000

CMD ["python", "src/main.py"]
```

2. **Criar Dockerfile para Frontend**
```dockerfile
# ClassiAramina/frontend/Dockerfile
FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
EXPOSE 80
```

3. **Docker Compose**
```yaml
# docker-compose.yml
version: '3.8'
services:
  backend:
    build: ./backend/classiaramina-backend
    ports:
      - "5000:5000"
    environment:
      - FLASK_ENV=production
    volumes:
      - ./data:/app/database

  frontend:
    build: ./frontend/classiaramina-frontend
    ports:
      - "80:80"
    depends_on:
      - backend
```

### Deploy
```bash
docker-compose up -d
```

## ☁️ Opção 3: AWS (Escalável)

### Arquitetura
- **Frontend**: S3 + CloudFront
- **Backend**: EC2 + RDS
- **Domínio**: Route 53

### 1. Frontend (S3 + CloudFront)

```bash
# Build do frontend
cd frontend/classiaramina-frontend
npm run build

# Upload para S3
aws s3 sync dist/ s3://classiaramina-frontend --delete

# Configurar CloudFront
aws cloudfront create-invalidation --distribution-id XXXXX --paths "/*"
```

### 2. Backend (EC2)

```bash
# Conectar ao EC2
ssh -i key.pem ubuntu@ec2-instance

# Instalar dependências
sudo apt update
sudo apt install python3 python3-pip nginx

# Configurar aplicação
git clone <repo>
cd ClassiAramina/backend/classiaramina-backend
pip3 install -r requirements.txt

# Configurar Nginx
sudo nano /etc/nginx/sites-available/classiaramina
```

**Configuração Nginx:**
```nginx
server {
    listen 80;
    server_name api.classiaramina.com;

    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### 3. Banco de Dados (RDS)

```python
# Atualizar configuração do banco
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://user:pass@rds-endpoint/classiaramina'
```

## 🔒 Configurações de Segurança

### 1. HTTPS/SSL

```bash
# Certbot para SSL gratuito
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d classiaramina.com
```

### 2. Variáveis de Ambiente

```bash
# .env para produção
FLASK_ENV=production
SECRET_KEY=sua-chave-super-secreta-aqui
DATABASE_URL=postgresql://...
CORS_ORIGINS=https://classiaramina.com
```

### 3. Firewall

```bash
# UFW no Ubuntu
sudo ufw allow 22    # SSH
sudo ufw allow 80    # HTTP
sudo ufw allow 443   # HTTPS
sudo ufw enable
```

## 📊 Monitoramento

### 1. Logs

```python
# Configurar logging no Flask
import logging
logging.basicConfig(level=logging.INFO)
```

### 2. Health Check

```python
# Adicionar endpoint de saúde
@app.route('/health')
def health_check():
    return {'status': 'healthy', 'timestamp': datetime.now().isoformat()}
```

### 3. Uptime Monitoring

- **UptimeRobot**: https://uptimerobot.com
- **Pingdom**: https://pingdom.com

## 🔄 CI/CD Pipeline

### GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Deploy ClassiAramina

on:
  push:
    branches: [main]

jobs:
  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '20'
      - name: Install and Build
        run: |
          cd frontend/classiaramina-frontend
          npm install
          npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}

  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Railway
        uses: bervProject/railway-deploy@v1.0.0
        with:
          railway_token: ${{ secrets.RAILWAY_TOKEN }}
          service: classiaramina-backend
```

## 🗄️ Backup e Recuperação

### 1. Backup do Banco

```bash
# SQLite
cp database/app.db backup/app_$(date +%Y%m%d).db

# PostgreSQL
pg_dump classiaramina > backup/db_$(date +%Y%m%d).sql
```

### 2. Backup Automático

```bash
# Crontab para backup diário
0 2 * * * /path/to/backup-script.sh
```

### 3. Script de Backup

```bash
#!/bin/bash
# backup-script.sh
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backups"

# Backup do banco
cp /app/database/app.db $BACKUP_DIR/db_$DATE.db

# Upload para S3
aws s3 cp $BACKUP_DIR/db_$DATE.db s3://classiaramina-backups/

# Limpar backups antigos (manter 30 dias)
find $BACKUP_DIR -name "*.db" -mtime +30 -delete
```

## 🚀 Otimizações de Performance

### 1. Frontend

```javascript
// Lazy loading de componentes
const AdminPanel = lazy(() => import('./components/Admin/AdminPanel'));

// Service Worker para cache
// sw.js
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

### 2. Backend

```python
# Cache com Redis
from flask_caching import Cache

cache = Cache(app, config={'CACHE_TYPE': 'redis'})

@app.route('/api/companies')
@cache.cached(timeout=300)  # 5 minutos
def get_companies():
    return Company.query.all()
```

### 3. CDN para Assets

```javascript
// Configurar CDN no Vite
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]'
      }
    }
  }
});
```

## 📋 Checklist de Deploy

### Pré-Deploy
- [ ] Testes passando
- [ ] Build sem erros
- [ ] Variáveis de ambiente configuradas
- [ ] SSL/HTTPS configurado
- [ ] Backup do banco atual

### Pós-Deploy
- [ ] Site acessível
- [ ] APIs funcionando
- [ ] Formulários enviando
- [ ] Responsividade OK
- [ ] Performance aceitável
- [ ] Monitoramento ativo

### Rollback Plan
- [ ] Backup disponível
- [ ] Processo de rollback testado
- [ ] Contatos de emergência
- [ ] Documentação atualizada

## 🆘 Troubleshooting

### Problemas Comuns

1. **CORS Error**
```python
# Configurar CORS para domínio específico
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', 'https://classiaramina.com')
    return response
```

2. **Database Connection**
```python
# Verificar conexão
try:
    db.create_all()
    print("Database connected successfully")
except Exception as e:
    print(f"Database error: {e}")
```

3. **Memory Issues**
```bash
# Monitorar uso de memória
htop
free -h

# Configurar swap se necessário
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

## 📞 Suporte Pós-Deploy

Para suporte após o deploy:
- **Email**: suporte@classiaramina.com
- **WhatsApp**: (16) 99445-4641
- **Horário**: 24/7 para emergências

---

**Deploy realizado com sucesso! 🎉**

