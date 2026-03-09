import * as authService from '../services/auth.service';
import type { Request, Response } from 'express';


export const register = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        if(!name || !email || !password) {
            return res.status(400).json({ error: 'Name, email and password are required' });
        }

        const user = await authService.registerUser(name, email, password);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Failed to register user' });
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if(!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const { token } = await authService.login(email, password);
        res.json({ token });
    } catch (error) {
        res.status(400).json({ error: 'Failed to login user' });
    }
}

export const getProfile = async (req: Request, res: Response) => {
    try {
        const user = await authService.getUserByEmail(req.userId!.email);
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: 'Failed to get user profile' });
    }
}