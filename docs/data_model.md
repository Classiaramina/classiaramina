# Modelo de Dados para ClassiAramina

## Entidades e Atributos

### 1. Empresa
- `id` (PK, Integer)
- `nome` (String)
- `descricao` (Text)
- `endereco` (String)
- `telefone` (String)
- `email` (String)
- `site` (String, Opcional)
- `logo_url` (String, Opcional)
- `categoria` (String)
- `data_cadastro` (DateTime)
- `status` (String: Ativo, Inativo, Pendente)
- `user_id` (FK, Integer)

### 2. Serviço
- `id` (PK, Integer)
- `titulo` (String)
- `descricao` (Text)
- `categoria` (String)
- `endereco` (String)
- `telefone` (String)
- `email` (String, Opcional)
- `imagem_url` (String, Opcional)
- `data_cadastro` (DateTime)
- `status` (String: Ativo, Inativo, Pendente)
- `user_id` (FK, Integer)

### 3. Usuário
- `id` (PK, Integer)
- `nome` (String)
- `email` (String, Único)
- `senha_hash` (String)
- `tipo_usuario` (String: Admin, Empresa, Prestador, Comum)
- `data_cadastro` (DateTime)
- `ultimo_login` (DateTime)

### 4. Pagamento
- `id` (PK, Integer)
- `user_id` (FK, Integer)
- `tipo_entidade` (String: Empresa, Serviço)
- `entidade_id` (Integer)
- `valor` (Float)
- `data_pagamento` (DateTime)
- `status` (String: Aprovado, Pendente, Recusado)
- `metodo_pagamento` (String)
- `transacao_id` (String, Único)

## Relacionamentos
- Um `Usuário` pode ter várias `Empresas`.
- Um `Usuário` pode ter vários `Serviços`.
- Um `Usuário` pode ter vários `Pagamentos`.
- Um `Pagamento` está associado a uma `Empresa` ou um `Serviço`.

