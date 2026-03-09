# Order Management API

A RESTful API built with **Node.js, Express, and TypeScript** for managing orders with full CRUD operations, JWT authentication, and automatic data transformation.

---

# Overview

This project implements an **Order Management API** that allows creating, retrieving, updating, and deleting orders with secure user authentication.

The API includes:

- automatic payload transformation
- **JWT-based authentication**
- relational data persistence
- clear separation of responsibilities (Controller → Service → Repository)
- Swagger documentation
- type-safe implementation using TypeScript

---

# Features

- Full **CRUD operations** for orders
- **JWT authentication** with bcrypt password hashing
- **Protected routes** with authentication middleware
- Automatic **payload → database field mapping**
- **Type-safe** architecture using TypeScript
- **Prisma ORM** for database operations
- **SQLite database**
- **Swagger API documentation** with Bearer token support
- Structured project architecture
- Proper **HTTP status codes**
- Error handling

---

# Technology Stack

| Layer           | Technology        |
| --------------- | ----------------- |
| Runtime         | Node.js           |
| Language        | TypeScript        |
| Framework       | Express.js        |
| ORM             | Prisma            |
| Database        | SQLite            |
| Authentication  | JWT + bcrypt      |
| Documentation   | Swagger (OpenAPI) |
| Package Manager | npm               |

---

# API Documentation

Interactive API documentation is available using Swagger.

After starting the server, open:

```
http://localhost:3000/api-docs
```

This interface allows you to:

- explore endpoints
- view request schemas
- test API requests directly from the browser

---

# Authentication

The API uses **JWT (JSON Web Tokens)** for authentication.

## How it works:

1. **Register** a new user at `/auth/register`
2. **Login** with credentials at `/auth/login` to receive a JWT token
3. Include the token in the `Authorization` header for protected routes:
   ```
   Authorization: Bearer <your-token>
   ```

## Protected Routes

Some endpoints require authentication. Use the Swagger UI **"Authorize"** button to test protected routes.

---

# API Endpoints

## Authentication Endpoints

| Method | Endpoint         | Description                 | Protected |
| ------ | ---------------- | --------------------------- | --------- |
| POST   | `/auth/register` | Register a new user         | No        |
| POST   | `/auth/login`    | Login and receive JWT token | No        |
| GET    | `/auth/profile`  | Get authenticated user info | Yes       |

## Order Endpoints

| Method | Endpoint     | Description        |
| ------ | ------------ | ------------------ |
| POST   | `/order`     | Create a new order |
| GET    | `/order/:id` | Get order by ID    |

## Optional Endpoints

| Method | Endpoint      | Description     |
| ------ | ------------- | --------------- |
| GET    | `/order/list` | List all orders |
| PUT    | `/order/:id`  | Update an order |
| DELETE | `/order/:id`  | Delete an order |

---

# Request Examples

## Register User

```bash
curl --location 'http://localhost:3000/auth/register' \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}'
```

## Login

```bash
curl --location 'http://localhost:3000/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
  "email": "john@example.com",
  "password": "securepassword123"
}'
```

Response:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

## Get Profile (Protected)

```bash
curl --location 'http://localhost:3000/auth/profile' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
```

## Create Order

```json
{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}
```

---

# Data Transformation

Incoming request fields are automatically transformed before being persisted in the database.

| Request Field  | Database Field |
| -------------- | -------------- |
| numeroPedido   | orderId        |
| valorTotal     | value          |
| dataCriacao    | creationDate   |
| idItem         | productId      |
| quantidadeItem | quantity       |
| valorItem      | price          |

---

# Example of Transformed Data

```json
{
  "orderId": "v10089016vdb",
  "value": 10000,
  "creationDate": "2023-07-19T12:24:11.529Z",
  "items": [
    {
      "productId": 2434,
      "quantity": 1,
      "price": 1000
    }
  ]
}
```

---

# Database Schema

The application uses **Prisma ORM with SQLite**.

## User

| Field    | Type        |
| -------- | ----------- |
| id       | String (PK) |
| name     | String      |
| email    | String      |
| password | String      |

## Order

| Field        | Type        |
| ------------ | ----------- |
| orderId      | String (PK) |
| value        | Float       |
| creationDate | DateTime    |

## Item

| Field     | Type        |
| --------- | ----------- |
| id        | Int (PK)    |
| orderId   | String (FK) |
| productId | Int         |
| quantity  | Int         |
| price     | Float       |

---

# Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd order-management-api
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Configure environment variables

Create a `.env` file:

```
DATABASE_URL="file:./dev.db"
PORT=3000
JWT_SECRET="your-secret-key-here"
```

**Important**: Replace `your-secret-key-here` with a strong secret key for JWT signing.

---

### 4. Run database migration

```bash
npx prisma migrate dev
```

`prisma migrate dev` already runs `prisma generate` automatically.
If you only need to regenerate the client (for example, after pulling schema changes without creating a new migration), run:

```bash
npx prisma generate
```

---

### 5. Start the development server

```bash
npm run dev
```

The API will be available at:

```
http://localhost:3000
```

Swagger documentation:

```
http://localhost:3000/api-docs
```

---

# Project Structure

```
src
├── controllers
│   ├── auth.controller.ts
│   └── order.controller.ts
├── services
│   ├── auth.service.ts
│   └── order.service.ts
├── repositories
│   ├── user.repository.ts
│   └── order.repository.ts
├── middlewares
│   └── auth.middleware.ts
├── mappers
│   └── order.mapper.ts
├── routes
│   ├── authRoutes.ts
│   └── orderRoutes.ts
├── types
│   └── order.types.ts
├── lib
│   └── prisma.ts
├── app.ts
└── server.ts

prisma
└── schema.prisma
```

---

# Error Handling

The API uses proper HTTP status codes:

| Code | Meaning               |
| ---- | --------------------- |
| 200  | Successful request    |
| 201  | Resource created      |
| 400  | Invalid request       |
| 401  | Unauthorized          |
| 404  | Resource not found    |
| 500  | Internal server error |

---

# Security

- **Password Hashing**: User passwords are hashed using bcrypt with 10 salt rounds
- **JWT Authentication**: Tokens expire after 1 hour for security
- **Protected Routes**: Authentication middleware validates JWT on protected endpoints
- **No Password Exposure**: User queries exclude password field from responses (except for authentication)

---

# Available Scripts

```bash
npm run dev
```

Start development server with hot reload.

```bash
npm run build
```

Compile TypeScript.

```bash
npm start
```

Start production server.

```bash
npx prisma studio
```

Open database GUI.

---

# Evaluation Criteria Covered

This project demonstrates:

- Implementation of required endpoints
- Clean architecture (Controller → Service → Repository)
- Proper naming conventions
- Robust error handling
- Correct HTTP status codes
- Swagger API documentation
- Organized Git commit history

---

# Possible Improvements

Future enhancements could include:

- JWT authentication
- Request validation (Zod or Joi)
- Unit and integration tests
- Logging middleware
- Rate limiting
- Docker support
- CI/CD pipeline

---

# Author

Developed as part of the **Jitterbit Technical Challenge**.

---
