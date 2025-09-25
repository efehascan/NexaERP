import "reflect-metadata";
import { AppDataSource } from "./config/data-source";
import app from "./app";
import { env } from "./config/env";

async function startServer() {
    try {
        await AppDataSource.initialize();
        console.log("Database connected");

        app.listen(env.PORT, () => {
            console.log(
                `Server running at http://localhost:${env.PORT} in ${env.NODE_ENV} mode`
            );
        });
    } catch (err) {
        console.error("Database connection failed:", err);
        process.exit(1); // Hata olursa process'i kapat
    }
}

startServer();
