import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { Server } from "socket.io";
import path from "path";
import { signup } from "./handlers/login";
import http from "http";
import { logIn } from "./handlers/signup";
import unprotectedRouter from "./routes/unprotectedRoutes";
import protectedRouter from "./routes/protectedRoutes";
import { logout } from "./handlers/logout";
import protect from "./modules/auth";
import { postMessage } from "./handlers/protected/messages";

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const frontendPath = path.join(__dirname, "../../frontend/dist");
app.use(express.static(frontendPath));
app.get("/api", async (req, res) => {
  res.status(200).json({ message: "ok" }).end();
});
app.post("/signup", signup);
app.post("/login", logIn);
app.get("/logout", logout);
app.use("/ideavault", unprotectedRouter);
app.use("/ideavault", protect, protectedRouter);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5173",
  },
});

io.on("connection", (socket) => {
  console.log("connected to ", socket.id);
  socket.on("join_room", (id) => {
    socket.join(id);
    console.log("room joined", id);
  });
  socket.on("send_message", async (data) => {
    console.log(data);
    socket.to(data.room).emit("recieve_message", data);
    // const savetodb = async (data) => {
    await postMessage(data);
    // };
    // await savetodb(data)
  });

  socket.on("disconnect", () => {
    console.log("disconnected", socket.id);
  });
});
export default server;
