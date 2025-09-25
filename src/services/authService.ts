import { comparePassword } from "../utils/bcryptUtils";
import { generateToken } from "../utils/jwtUtils";
import { findUserByUsername } from "./userService";

export async function login(username: string, password: string) {
    const user = await findUserByUsername(username);
    if (!user) {
        throw new Error("Invalid username or password");
    }

    const isValid = await comparePassword(password, user.password);
    if (!isValid) {
        throw new Error("Invalid password");
    }

    return generateToken({
        userId: user.id,
       companyId: user.companyId,
       role: user.role,
    });

}