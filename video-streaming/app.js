const videoElement = document.getElementById("videoElement");
const latencyDisplay = document.getElementById("latencyValue");
const loadTimeDisplay = document.getElementById("loadTimeValue");

let socket;
let lastFrameTime = 0;
let mediaSource;
let sourceBuffer;
const queue = [];
let isBufferAppending = false;

function appendToBuffer(data) {
  if (isBufferAppending || !sourceBuffer) {
    queue.push(data);
    return;
  }

  isBufferAppending = true;
  const startTime = performance.now();
  sourceBuffer.appendBuffer(data);
  sourceBuffer.addEventListener(
    "updateend",
    () => {
      isBufferAppending = false;
      const endTime = performance.now();
      const loadTime = endTime - startTime;
      loadTimeDisplay.textContent = loadTime.toFixed(2);
      if (queue.length > 0) {
        appendToBuffer(queue.shift());
      }
    },

    { once: true }
  );
}

function startStreaming() {
  // WebSocket 연결 설정
  socket = new WebSocket("ws://localhost:8080");

  // 비디오 스트림을 위한 MediaSource 객체 생성
  mediaSource = new MediaSource({ mode: "sequence" });
  videoElement.src = URL.createObjectURL(mediaSource);

  mediaSource.addEventListener("sourceopen", () => {
    sourceBuffer = mediaSource.addSourceBuffer('video/webm; codecs="vp8"');
    socket.addEventListener("message", (event) => {
      const now = performance.now();
      const latency = now - lastFrameTime;
      lastFrameTime = now;

      // 지연 시간 업데이트
      latencyDisplay.textContent = latency.toFixed(2);
      // 새로운 데이터 추가
      appendToBuffer(new Uint8Array(event.data));
    });
  });

  socket.addEventListener("open", () => {
    console.log("WebSocket connected");
  });

  socket.addEventListener("error", (error) => {
    console.error("WebSocket error:", error);
  });

  socket.addEventListener("close", () => {
    console.log("WebSocket connection closed");
  });
}

// 문서가 로드될 때 비디오 스트리밍 시작
document.addEventListener("DOMContentLoaded", () => {
  startStreaming();
});
