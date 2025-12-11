import express from "express";
import motosRouter from "./motos/router.js";
import cors from "cors";

const app = express();

//1) CORS primeiro
app.use(cors({
    origin: "http://localhost:8080", 
    methods: "GET,POST,PUT,DELETE",
}));

//2) permite JSON no body
app.use(express.json());

//3) registra as rotas
app.use("/api", motosRouter);

export default app;
