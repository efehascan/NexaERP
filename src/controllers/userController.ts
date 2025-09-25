import { Request, Response } from "express";
import * as userService from "../services/userService";
import { UserRole } from "../enums/UserRole";

export async function register(req: Request, res: Response) {
    const { username, password, role, companyId } = req.body;

    try{
        const user = await userService.createUser(
            username,
            password,
            role || UserRole.USER,
            companyId,
        );

        res.status(201).json({
            message: "Kullanıcı oluşturuldu",
            user: {
                id: user.id,
                username: user.username,
                role: user.role,
            }
        });
    } catch (err) {
        res.status(400).json({
            message: "Kullanıcı oluşturulamadı",
            error: (err as Error).message,
        })
    }
}

