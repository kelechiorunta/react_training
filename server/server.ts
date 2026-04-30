import http from "http";
import { WebSocketServer } from "ws";
import { generator } from "./routes/chatsRouter";

import app from "./app";
import client from "./wsClient";

const server = http.createServer(app);
server.listen(3500, () => console.log("Listening on PORT 3500"));

export const wss = new WebSocketServer({ server });

// Initial client message
client.on("open", async () => {
  client.send("Hi Server");
});

wss.on("connection", async (ws) => {
  ws.send("Hello from server!");

  ws.on("message", async (message) => {
    console.log("Received:", message.toString());

    setTimeout(async () => {
      console.log("GENERATOR", await generator("SEND_TEXT").next());
    }, 1000);

    const result = (await generator("SEND_TEXT").next()).value;
    console.log("result", result);
    if (result) {
      ws.send(String(result));
    }

    // wss.clients.forEach((client) => {
    //   client.on("message", (data) => {
    //     client.send(data.toString());
    //   });
    // });
  });
});
