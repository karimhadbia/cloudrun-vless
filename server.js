import http from "http";
import { WebSocketServer } from "ws";

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.end("Cloud Run WebSocket Ready");
});

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (msg) => {
    console.log("Received:", msg.toString());
    ws.send("OK");
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

server.listen(port, () => {
  console.log("Server running on port", port);
});
