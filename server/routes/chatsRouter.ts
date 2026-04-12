import { Router, type Request, type Response } from "express";
import client from "../wsClient";
import chatEmitter from "../chatAsyncIterator";

const chatRouter = Router();
const chatter = new chatEmitter();

export async function* generator(event: string) {
  for await (const message of chatter.myAsyncIterator(event)) {
    yield message;
  }
}

chatRouter.get("/:chat", async (req: Request, res: Response) => {
  const chat = req.params?.chat;
  try {
    // Ensure WebSocket is open
    if (client.readyState !== client.OPEN) {
      return res.status(400).json({ error: "WebSocket not connected" });
    }

    // Emit messages every second (limit to avoid infinite loop)
    let count = 0;

    const interval = setInterval(() => {
      client.send("Client here");
      chatter.emit("SEND_TEXT", chat);
      count++;

      if (count === 1) {
        clearInterval(interval);
        // count = 0;
      }
    }, 1000);

    return res.status(200).json({ message: "Started sending messages" });
  } catch (error) {
    return res.status(500).json({
      error: error instanceof Error ? error.message : error,
    });
  }
});

chatRouter.get("/sse/data", (req, res) => {
  // Set the Content-Type header to 'text/event-stream' to indicate that
  // the response will be an SSE stream
  res.setHeader("Content-Type", "text/event-stream");

  // Prevent caching of the stream (important to ensure real-time updates)
  res.setHeader("Cache-Control", "no-cache");

  // Keep the connection alive to continuously send events
  res.setHeader("Connection", "keep-alive");

  // Send the headers immediately, so the client starts listening for events
  res.flushHeaders();

  // Initialize a counter variable for the messages
  let counter = 0;

  // Use setInterval to send a new message every second (1000ms)
  const id = setInterval(() => {
    // Send a new SSE message, incrementing the counter each time
    // Each message is prefixed with 'data: ' and followed by the message content
    chatter.emit("SEND_TEXT", `counter is ${counter}`);
    res.write(`data: This is message ${counter++}\n\n`);
    if (counter >= 6) {
      clearInterval(id);
    }
  }, 1000);

  // Thi
});

export default chatRouter;
