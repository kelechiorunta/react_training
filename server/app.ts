import express, { type Express } from "express";
import chatRouter from "./routes/chatsRouter";

const app: Express = express();

app.use("/message", chatRouter);

export default app;
