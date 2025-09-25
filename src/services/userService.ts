import { AppDataSource } from "../config/data-source";
import { User } from "../entity/User";
import { hashPassword } from "../utils/bcryptUtils";
import { UserRole } from "../enums/UserRole";

const userRepo = AppDataSource.getRepository(User);

export async function createUser(
    username : string,
    password: string,
    role: UserRole,
    companyId: number
) {
    const hashed = await hashPassword(password);
    const user = userRepo.create({
        username,
        password: hashed,
        role,
        companyId,
    });
    return await userRepo.save(user);
}

export async function findUserByUsername(username: string){
    return await userRepo.findOne({where: {username}});
}