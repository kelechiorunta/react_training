import http from "http";
import { WebSocketServer } from "ws";

import app from "./app";

const server = http.createServer(app);
server.listen(3500, () => console.log("Listening on PORT 3500"));

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  ws.on("upgrade", () => {
    console.log(
      "Server: http Client upgraded and connected. Listening on PORT 3500",
    );
  });
  ws.send("Hello from server!");

  ws.on("message", (message) => {
    console.log("Received:", message.toString());
  });
});
