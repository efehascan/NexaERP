import jwt, { SignOptions } from "jsonwebtoken";
import { env } from "../config/env";

export interface JwtUserPayload {
    userId: number;
    companyId: number;
    role: string;
}

export function generateToken(payload: JwtUserPayload): string {
    return jwt.sign(
        payload as Record<string, any>,
        env.JWT_SECRET,
        {
            expiresIn: env.JWT_EXPIRES_IN || "1h"
        } as SignOptions
    );
}

export function verifyToken(token: string): JwtUserPayload {
    const decoded = jwt.verify(token, env.JWT_SECRET);
    return decoded as JwtUserPayload;
}