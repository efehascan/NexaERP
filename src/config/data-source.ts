import "reflect-metadata";
import { DataSource } from "typeorm";
import { env } from "./env";
import { User } from "../entity/User";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    entities: [User],
    synchronize: true,
    logging: true,
});
