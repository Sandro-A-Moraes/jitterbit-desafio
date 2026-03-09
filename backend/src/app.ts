import dotenv from 'dotenv';
import cors from 'cors'
import express from 'express'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

export default app;