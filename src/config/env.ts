import dotenv from "dotenv";

dotenv.config();

export const env = {
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV || "development",

    DB_HOST: process.env.DB_HOST || "localhost",
    DB_PORT: Number(process.env.DB_PORT) || 3306,
    DB_USERNAME: process.env.DB_USERNAME || "root",
    DB_PASSWORD: process.env.DB_PASSWORD || "",
    DB_NAME: process.env.DB_NAME || "erp_db",

    JWT_SECRET: process.env.JWT_SECRET || "8ce291f96173cff9af05970f5bddf7b82304ea153008cc459c0db5ce39fe858558cc0a6b35b143b8cf9463a8a5a6ac5fac1eb788bdc787e1a4881e88e69c28ac  ",
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "1h",
};
