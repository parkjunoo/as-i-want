const WebSocket = require("ws");
const { spawn } = require("child_process");

const PORT = 8080;
const wss = new WebSocket.Server({ port: PORT });

wss.on("connection", (ws) => {
  console.log("Client connected");
  const ffmpeg = spawn("ffmpeg", [
    "-re",
    "-i",
    "example_video.mp4",
    "-f",
    "webm",
    "-c:v",
    "vp8",
    "-an",
    "pipe:1",
  ]);

  ffmpeg.stdout.on("data", (data) => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(data);
    }
  });

  ffmpeg.stderr.on("data", (data) => {
    console.error(`FFmpeg error: ${data}`);
  });

  ffmpeg.on("close", (code) => {
    console.log(`FFmpeg process exited with code ${code}`);
  });

  ws.on("close", () => {
    console.log("Client disconnected");
    ffmpeg.kill();
  });
});

console.log(`WebSocket server is running on ws://localhost:${PORT}`);
