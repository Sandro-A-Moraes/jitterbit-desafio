import type { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import type { TokenPayload } from "../types/express/TokenPayload";


export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
   const authHeader = req.headers.authorization;

   if(!authHeader) {
       return res.status(401).json({ error: 'No token provided' });
   }

   const [schema, token] = authHeader.split(' ');

   if(schema !== 'Bearer' || !token) {
       return res.status(401).json({ error: 'Invalid token format' });
   }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as TokenPayload;

        req.userId = decoded

        return next();
        
    } catch (error) {
        return res.status(401).json({ error: 'Invalid or expired token' });
    }
};
