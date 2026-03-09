import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import router from "./routes/orderRoutes";
import authRouter from "./routes/authRoutes";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import type { Options } from "swagger-jsdoc";

dotenv.config();

const app = express();

const swaggerOptions: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Jitterbit API Challenge",
      version: "1.0.0",
      description: "API documentation",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/**/*.ts"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions)

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(router);

app.use(authRouter)

export default app;
