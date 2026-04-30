import WebSocket from "ws";

const client = new WebSocket("ws://localhost:3500");

// client.on("open", () => {
//   // client.send("Love");
// });

// client.on("pong", () => {
//   // console.log("Client received pong");
//   // texter.emit("SEND_TEXT", { message: "Hello Love" });
// });

// client.on("message", () => {
//   // console.log("Cheers");
//   // texter.emit("SEND_TEXT", "Hello love");
// });

export default client;
