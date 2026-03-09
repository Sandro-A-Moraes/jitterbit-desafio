import { Router } from "express";
import * as authController from "../controllers/auth.controller";
import {authenticateToken as auth} from "../middlewares/auth.middleware";

const authRouter = Router();

authRouter.post("/register", authController.register);

authRouter.post("/login", authController.login);

authRouter.get("/profile", auth, async(req, res) => {
    if(!req.userId) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
      const user = await authController.getProfile(req, res);

      return res.json(user);

    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
});

export default authRouter;