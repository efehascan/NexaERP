import { Request, Response } from "express";
import * as authService from "../services/authService";

export async function login(req: Request, res: Response) {
    const { username, password } = req.body;

    try {
        const token = await authService.login(username, password);
        res.json({ token });
    } catch (err) {
        res.status(401).json({ message: (err as Error).message });
    }
}
