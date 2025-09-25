import { Router } from "express";
import { register } from "../controllers/userController";
import { authMiddleware } from "../middleware/authMiddleware";
import { authorizeRoles } from "../middleware/roleMiddleware";
import { UserRole } from "../enums/UserRole";

const router = Router();

router.post("/register", authMiddleware, authorizeRoles(UserRole.ADMIN), register);

export default router;
