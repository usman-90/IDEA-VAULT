import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const frontendPath = path.join(__dirname, "../../frontend/dist");
app.use(express.static(frontendPath));

app.get("/api", (req, res) => {
  res.status(200).json({ message: "ok" }).end();
});

export default app;
