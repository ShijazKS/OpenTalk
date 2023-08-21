require('dotenv').config();

const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const { Socket } = require('dgram');

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

const generateGuestName = () => {
    const guestNumber = Array.from(rooms.values()).filter((name) => name.startsWith("guest"))
        .length + 1;
    return `guest${guestNumber}`;
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
    

    socket.on("send_msg", (data) => {
        const senderSocketId = rooms.get(socket.id);
        //if (!senderSocketId) return;
        //socket.broadcast.emit("receive_msg",data);


        socket.to(data.room).emit("receive_msg", {
            message: data.message,
            senderSocketId, // Use the guest name instead of socket.id
        });
    });

    socket.on("disconnect", () => {
        // Remove the socket ID and its guest name when a client disconnects
        console.log(`User Disconnected: ${socket.id}`);
        rooms.delete(socket.id);
    });
});

server.listen(PORT, () => {
    console.log(`Server is Running on *:${PORT} `);
});
