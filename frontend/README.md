# Frontend - Order Management

Simple and clean React frontend for the Order Management API with JWT authentication.

## Features

- **User Authentication** (Login/Register)
- **Profile View** with user information
- **Orders List** showing all user orders
- **Responsive Design** with Tailwind CSS
- **TypeScript** for type safety

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS v4
- Vite

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

**Important**: Make sure the backend is running at `http://localhost:3000`

## Project Structure

```
src/
├── contexts/
│   └── AuthContext.tsx      # Authentication context provider
├── hooks/
│   └── useAuth.ts           # Authentication hook
├── pages/
│   ├── Login.tsx            # Login/Register page
│   └── Dashboard.tsx        # Main dashboard with profile and orders
├── services/
│   └── api.ts               # API service layer
├── App.tsx                  # Main app component
└── main.tsx                 # App entry point
```

## Usage

### Login/Register

1. Open the app - you'll see the login screen
2. Click "Don't have an account? Sign up" to register
3. Fill in your details and submit
4. You'll be automatically logged in

### Dashboard

After login, you'll see:

- **Profile section** with your name and email
- **Orders section** showing all your orders
- **Logout button** in the header

### Creating Orders

Orders are created via the backend API. Use Swagger (`http://localhost:3000/api-docs`) or cURL to create orders, and they'll appear in the dashboard.

Example:

```bash
curl --location 'http://localhost:3000/order' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer YOUR_TOKEN_HERE' \
--data '{
  "numeroPedido": "ORD-001",
  "valorTotal": 150.00,
  "dataCriacao": "2026-03-09T10:00:00Z",
  "items": [
    {
      "idItem": "1234",
      "quantidadeItem": 2,
      "valorItem": 75.00
    }
  ]
}'
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Environment

The API URL is hardcoded to `http://localhost:3000`. If your backend runs on a different port, update it in `src/services/api.ts`.
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

```

```
