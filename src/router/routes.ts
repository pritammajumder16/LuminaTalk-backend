import { Router } from "express";
import AuthRoutes from "../controllers/auth/index";
const router = Router();

router.use("/auth", AuthRoutes);

export default router;
