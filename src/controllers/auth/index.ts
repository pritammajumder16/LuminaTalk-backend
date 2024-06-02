import { Router } from "express";
import LoginRoutes from "./login";
import RegisterRoutes from "./register";
const router = Router();

router.use("/login", LoginRoutes);
router.use("/register", RegisterRoutes);
export default router;
