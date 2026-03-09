import { Router } from "express";

const router = Router();

router.post("/register", (req, res) => {
  // Lógica para registrar um novo usuário
  res.status(201).json({ message: "Usuário registrado com sucesso" });
});

router.post("/login", (req, res) => {
  // Lógica para autenticar um usuário
  res.status(200).json({ message: "Usuário autenticado com sucesso" });
});

router.get("/profile", (req, res) => {
  // Lógica para obter o perfil do usuário autenticado
  res.status(200).json({ message: "Perfil do usuário" });
});


export default router;