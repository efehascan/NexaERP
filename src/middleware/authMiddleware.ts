import { Request, Response, NextFunction } from "express";
import { verifyToken, JwtUserPayload } from "../utils/jwtUtils";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers["authorization"];
    if (!authHeader) return res.status(401).json({ message: "Token gerekli" });

    const token = authHeader.split(" ")[1];
    try {
        const decoded = verifyToken(token);
        (req as any).user = decoded as JwtUserPayload;
        next();
    } catch {
        res.status(401).json({ message: "Geçersiz token" });
    }
}
