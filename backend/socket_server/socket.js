import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3001"],
        methods: ["GET", "POST"]
    }
});

// enable real time conversation
export const getReceiverSocketId = (receiverId) => {
    return userSocketMap(receiverId);
}

const userSocketMap = {}; //{userId: socket}

io.on("connection", (socket) => {
    console.log("User connected", socket.id);

    const userId = socket.handshake.query.userId;
    if(userId != undefined){
        userSocketMap[userId] = socket.id;
    }

    // io.emit is use to send events to all connected clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    // socket.on() is used to listen to the events. can be used both on client and server side
    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));

    });
});

export {app, server, io};