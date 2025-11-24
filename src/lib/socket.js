import { io } from "socket.io-client";

let socket = null;

export function getSocket() {
  if (!socket) {
    // socket = io("http://localhost:5000");
    socket = io("https://opentalk-server.onrender.com");
  }
  return socket;
}

export function resetSocket() {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
}
