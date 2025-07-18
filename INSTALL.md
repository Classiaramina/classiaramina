# 🚀 Guia de Instalação - ClassiAramina

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Python 3.11 ou superior**
- **Node.js 20 ou superior**
- **pnpm** (recomendado) ou npm
- **Git** (para clonar o repositório)

## 📥 Download do Projeto

Se você recebeu o projeto em arquivo ZIP, extraia-o. Caso contrário, clone o repositório:

```bash
git clone <url-do-repositorio>
cd ClassiAramina
```

## 🔧 Configuração do Backend (Flask)

### 1. Navegue para o diretório do backend
```bash
cd ClassiAramina/backend/classiaramina-backend
```

### 2. Ative o ambiente virtual
```bash
# Linux/Mac
source venv/bin/activate

# Windows
venv\Scripts\activate
```

### 3. Instale as dependências (se necessário)
```bash
pip install flask flask-sqlalchemy
```

### 4. Configure o banco de dados
O banco SQLite será criado automaticamente na primeira execução.

### 5. Execute o servidor backend
```bash
python src/main.py
```

✅ **Backend rodando em**: http://localhost:5000

## 🎨 Configuração do Frontend (React)

### 1. Abra um novo terminal e navegue para o frontend
```bash
cd ClassiAramina/frontend/classiaramina-frontend
```

### 2. Instale as dependências
```bash
# Com pnpm (recomendado)
pnpm install

# Ou com npm
npm install
```

### 3. Execute o servidor de desenvolvimento
```bash
# Com pnpm
pnpm run dev --host

# Ou com npm
npm run dev -- --host
```

✅ **Frontend rodando em**: http://localhost:5173

## 📊 Populando com Dados de Exemplo

Para adicionar dados de exemplo ao banco:

### Método 1: Via API
```bash
curl -X POST http://localhost:5000/api/seed-data
```

### Método 2: Via Navegador
Acesse: http://localhost:5000/api/seed-data (método POST)

### Método 3: Via JavaScript no Console
```javascript
fetch('http://localhost:5000/api/seed-data', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' }
})
.then(response => response.json())
.then(data => console.log(data));
```

## 🌐 Acessando o Sistema

### Site Principal
- **URL**: http://localhost:5173
- **Funcionalidades**: Visualização de empresas, serviços, vagas

### Painel Administrativo
- **URL**: http://localhost:5173/admin
- **Funcionalidades**: Gerenciamento completo do sistema

### API Backend
- **URL**: http://localhost:5000
- **Documentação**: Veja README.md para endpoints disponíveis

## 🔍 Verificação da Instalação

### 1. Teste o Backend
```bash
curl http://localhost:5000/api/status
```
Resposta esperada:
```json
{
  "status": "API ClassiAramina funcionando!",
  "version": "1.0.0"
}
```

### 2. Teste as APIs
```bash
# Listar empresas
curl http://localhost:5000/api/companies

# Listar serviços
curl http://localhost:5000/api/services

# Listar vagas
curl http://localhost:5000/api/jobs
```

### 3. Teste o Frontend
- Acesse http://localhost:5173
- Verifique se as empresas estão carregando
- Teste os filtros de busca
- Navegue pelas diferentes seções

## 🚨 Solução de Problemas

### Erro de CORS
Se houver problemas de CORS, verifique se:
- O backend está rodando na porta 5000
- O frontend está configurado para acessar localhost:5000
- As configurações de CORS estão corretas no main.py

### Erro de Dependências
```bash
# Backend - reinstalar dependências
pip install --upgrade flask flask-sqlalchemy

# Frontend - limpar cache e reinstalar
rm -rf node_modules package-lock.json
pnpm install
```

### Erro de Porta Ocupada
```bash
# Verificar processos na porta 5000
lsof -i :5000

# Verificar processos na porta 5173
lsof -i :5173

# Matar processo se necessário
kill -9 <PID>
```

### Banco de Dados Corrompido
```bash
# Deletar e recriar banco
rm ClassiAramina/backend/classiaramina-backend/src/database/app.db
# Reiniciar o backend para recriar automaticamente
```

## 📱 Testando Responsividade

### Desktop
- Resolução mínima: 1024x768
- Navegadores: Chrome, Firefox, Safari, Edge

### Mobile
- Teste no Chrome DevTools (F12 > Toggle Device Toolbar)
- Resoluções: 375x667 (iPhone), 414x896 (iPhone Plus), 360x640 (Android)

### Tablet
- Resoluções: 768x1024 (iPad), 1024x768 (iPad Landscape)

## 🔧 Configurações Avançadas

### Mudando Portas
```bash
# Backend - editar main.py
app.run(host='0.0.0.0', port=8000, debug=True)

# Frontend - editar vite.config.js
export default defineConfig({
  server: {
    port: 3000
  }
})
```

### Configurando Base de Dados Externa
```python
# main.py - substituir SQLite por PostgreSQL
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://user:pass@localhost/classiaramina'
```

## 📋 Checklist de Instalação

- [ ] Python 3.11+ instalado
- [ ] Node.js 20+ instalado
- [ ] pnpm instalado
- [ ] Backend rodando na porta 5000
- [ ] Frontend rodando na porta 5173
- [ ] Dados de exemplo carregados
- [ ] APIs respondendo corretamente
- [ ] Site carregando sem erros
- [ ] Responsividade funcionando

## 🆘 Suporte

Se encontrar problemas durante a instalação:

1. **Verifique os logs** nos terminais do backend e frontend
2. **Consulte a documentação** no README.md
3. **Teste as APIs** individualmente
4. **Limpe o cache** do navegador
5. **Reinicie os servidores**

Para suporte adicional:
- **Email**: contato@classiaramina.com
- **WhatsApp**: (16) 99445-4641

---

**Instalação concluída com sucesso! 🎉**

