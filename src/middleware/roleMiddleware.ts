import { Request, Response, NextFunction } from "express";
import { UserRole } from "../enums/UserRole";

export function authorizeRoles(...allowedRoles: UserRole[]) {
    return (req: Request, res: Response, next: NextFunction) => {
        const user = (req as any).user;
        if (!user || !allowedRoles.includes(user.role)) {
            return res.status(403).json({ message: "Yetkisiz erişim" });
        }
        next();
    };
}