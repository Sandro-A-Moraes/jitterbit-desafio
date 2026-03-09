import * as authService from "../services/auth.service";
import type { Request, Response } from "express";

// Handle user registration
export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ error: "Name, email and password are required" });
    }

    const user = await authService.registerUser(name, email, password);
    res.status(201).json(user);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to register user";
    res.status(400).json({ error: message });
  }
};

// Handle user login and JWT generation
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const { token } = await authService.login(email, password);
    res.json({ token });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to login user";
    res.status(400).json({ error: message });
  }
};

// Get authenticated user profile
export const getProfile = async (req: Request, res: Response) => {
  try {
    if (!req.userId?.userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const user = await authService.getUserById(req.userId.userId);
    res.json(user);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to get user profile";
    console.error("Profile error:", error);
    res.status(400).json({ error: message });
  }
};
