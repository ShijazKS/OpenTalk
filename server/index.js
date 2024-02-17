require("dotenv").config();

const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

let PORT = process.env.PORT;

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Map to associate each socket ID with its guest name
const rooms = new Map();

// Map to store room-wise user counts
const roomUserCounts = new Map();

const generateGuestName = () => {
  const randomNumber = Math.floor(100 + Math.random() * 900);
  const guestNumber =
    Array.from(rooms.values()).filter((name) => name.startsWith("guest"))
      .length + 1;
  return `G${randomNumber}`;
};

const getCurrentTime = () => {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (12:00 am)
  minutes = minutes < 10 ? "0" + minutes : minutes; // Add leading zero if minutes < 10
  const currentTime = hours + ":" + minutes + " " + ampm;
  return currentTime;
};

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("data_from_client", (data) => {
    console.log("Data received from client:", data);
    // You can perform any server-side logic with the received data here
  });

  socket.on("join_room", (data) => {
    const currentRoom = socket.room;
    socket.join(data);
    socket.room = data;

    // Generate and send guest name when the client joins the room
    const userName = generateGuestName();
    rooms.set(socket.id, userName);

    

    socket.emit("user_name", userName);
  });

  // Handle the data received from the client

  socket.on("send_msg", async (data) => {
    const senderSocketId = rooms.get(socket.id);
    // const currentTime = getCurrentTime();
    //console.log(roomUserCounts)
    if (data.type === "text") {
      socket.to(data.room).emit("receive_msg", {
        type: data.type,
        message: data.message,
        senderSocketId,
        time: data.time,
      });
    }
  });

  socket.on("disconnect", () => {
    const currentRoom = socket.room;

    // Remove the socket ID and its guest name when a client disconnects
    console.log(`User Disconnected: ${socket.id}`);
    rooms.delete(socket.id);

    // Update room user count
    if (currentRoom) {
      roomUserCounts.set(currentRoom, (roomUserCounts.get(currentRoom) || 0) - 1);

      // If user count becomes zero, remove the room from the map
      if (roomUserCounts.get(currentRoom) === 0) {
        roomUserCounts.delete(currentRoom);
      }

      // Emit updated user count to all clients in the room
      io.to(currentRoom).emit("user_count", roomUserCounts.get(currentRoom));
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server is Running on *:${PORT} `);
});
