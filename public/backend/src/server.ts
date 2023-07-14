import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import pool from "./db";
import { signup } from "./handlers/login";
import { logIn } from "./handlers/signup";
import unprotectedRouter from "./routes/unprotectedRoutes";

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const frontendPath = path.join(__dirname, "../../frontend/dist");
app.use(express.static(frontendPath));

app.get("/api", async (req, res) => {
  res.status(200).json({ message: "ok"}).end();
});
app.post("/signup", signup);
app.post("/login", logIn);
app.use('/ideavault',unprotectedRouter)

export default app;
