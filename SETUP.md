# Quick Setup Checklist

Se o login/registro não estiver funcionando, siga este checklist:

## 1. Backend Setup

### Criar arquivo .env

Copie `.env.example` para `.env` na pasta `backend/`:

```bash
cp .env.example .env
```

O arquivo `.env` deve conter:

```
DATABASE_URL="file:./dev.db"
PORT=3000
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
```

### Instalar dependências

```bash
cd backend
npm install
```

### Rodar migrations do Prisma

```bash
npx prisma migrate dev
```

### Iniciar o backend

```bash
npm run dev
```

O backend deve estar rodando em `http://localhost:3000`

## 2. Frontend Setup

### Instalar dependências

```bash
cd frontend
npm install
```

### Iniciar o frontend

```bash
npm run dev
```

O frontend deve abrir em `http://localhost:5173`

## 3. Testar

1. Abra o frontend em `http://localhost:5173`
2. Clique em "Don't have an account? Sign up"
3. Preencha os dados e clique em "Sign Up"
4. Se funcionar, você será redirecionado para o dashboard

## Problemas Comuns

### "Cannot connect to server"

- O backend não está rodando
- Solução: Execute `npm run dev` na pasta `backend`

### "Failed to register user"

- O banco de dados não foi inicializado
- Solução: Execute `npx prisma migrate dev` na pasta `backend`

### "User already exists"

- Tente fazer login ao invés de registrar
- Ou use um email diferente

### Token inválido

- O JWT_SECRET não está configurado no .env
- Solução: Crie o arquivo `.env` conforme acima
