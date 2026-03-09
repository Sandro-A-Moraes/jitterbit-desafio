# Order Management API

A RESTful API built with Node.js and TypeScript for managing orders with full CRUD operations support.

## Overview

This API provides a comprehensive solution for order management, featuring automatic data transformation, relational database storage with PostgreSQL, and robust error handling.

## Features

- Create, read, update, and delete orders
- Automatic field mapping between input and database schemas
- Type-safe implementation using TypeScript
- Prisma ORM for database operations
- Input validation and error handling
- RESTful API design with appropriate HTTP status codes

## Technology Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Package Manager**: npm

## API Endpoints

### Required Endpoints

| Method | URL               | Description        |
| ------ | ----------------- | ------------------ |
| `POST` | `/order`          | Create a new order |
| `GET`  | `/order/:orderId` | Get order by ID    |

### Optional Endpoints

| Method   | URL               | Description        |
| -------- | ----------------- | ------------------ |
| `GET`    | `/order/list`     | List all orders    |
| `PUT`    | `/order/:orderId` | Update order by ID |
| `DELETE` | `/order/:orderId` | Delete order by ID |

## Request/Response Format

### Create Order Request

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

### Example using cURL

```bash
curl --location 'http://localhost:3000/order' \
--header 'Content-Type: application/json' \
--data '{
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
}'
```

## Data Transformation

The API automatically transforms incoming data fields to match the database schema:

| Input Field      | Database Field |
| ---------------- | -------------- |
| `numeroPedido`   | `orderId`      |
| `valorTotal`     | `value`        |
| `dataCriacao`    | `creationDate` |
| `idItem`         | `productId`    |
| `quantidadeItem` | `quantity`     |
| `valorItem`      | `price`        |

### Transformed Data Example

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

## Database Schema

### Order Table

| Column         | Type         | Description             |
| -------------- | ------------ | ----------------------- |
| `orderId`      | VARCHAR (PK) | Unique order identifier |
| `value`        | NUMERIC      | Total order value       |
| `creationDate` | TIMESTAMP    | Order creation date     |

### Item Table

| Column      | Type         | Description        |
| ----------- | ------------ | ------------------ |
| `orderId`   | VARCHAR (FK) | Reference to order |
| `productId` | INTEGER      | Product identifier |
| `quantity`  | INTEGER      | Item quantity      |
| `price`     | NUMERIC      | Item price         |

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd jitterbit-desafio
```

2. Navigate to the backend directory:

```bash
cd backend
```

3. Install dependencies:

```bash
npm install
```

4. Set up your environment variables (create a `.env` file):

```env
DATABASE_URL="postgresql://user:password@localhost:5432/orders_db"
PORT=3000
```

5. Run database migrations:

```bash
npx prisma migrate dev
```

6. Start the development server:

```bash
npm run dev
```

The API will be available at `http://localhost:3000`.

## Project Structure

```
backend/
├── prisma/
│   ├── schema.prisma          # Database schema definition
│   └── migrations/            # Database migrations
├── src/
│   ├── controllers/           # Request handlers
│   ├── services/              # Business logic
│   ├── repositories/          # Database operations
│   ├── mappers/               # Data transformation
│   ├── routes/                # API routes
│   ├── types/                 # TypeScript type definitions
│   ├── lib/                   # Shared utilities (Prisma client)
│   ├── app.ts                 # Express app configuration
│   └── server.ts              # Server entry point
├── package.json
└── tsconfig.json
```

## Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npx prisma studio` - Open Prisma Studio for database management
- `npx prisma migrate dev` - Run database migrations

## Error Handling

The API implements comprehensive error handling with appropriate HTTP status codes:

- `200 OK` - Successful GET request
- `201 Created` - Successful POST request
- `400 Bad Request` - Invalid input data
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server error

## Evaluation Criteria

This project demonstrates:

- Complete implementation of minimum requirements
- Clean, organized, and well-commented code
- Proper naming conventions and code structure
- Robust error handling with clear messages
- Correct HTTP status codes for each operation
- Professional Git workflow with clear commit messages

## Future Enhancements

Potential improvements and features:

- JWT authentication implementation
- API documentation with Swagger/OpenAPI
- Request rate limiting
- Logging system
- Unit and integration tests
- Docker containerization
- CI/CD pipeline

## License

This project is part of a technical challenge.

## Author

Developed as part of the Jitterbit technical assessment.
