import express from "express";


const app = express();

// Middleware
app.use(express.json());


// Health Check
app.get("/", (req, res) => {
    res.json({ message: "ERP API running" });
});

export default app;
