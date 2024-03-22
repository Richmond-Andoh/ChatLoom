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

io.on("connection", (socket) => {
    console.log("User connected", socket.id);


    // socket.on() is used to listen to the events. can be used both on client and server side
    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id);
    });
});

export {app, server, io};