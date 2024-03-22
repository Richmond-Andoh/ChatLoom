import express from "express"
import dotenv from "dotenv"
import auth_route from "./routes/auth_routes.js";
import dbconnection from "./db/dbconnection.js";
import message_route from "./routes/message_routes.js";
import cookieParser from "cookie-parser";
import user_routes from "./routes/user_routes.js";
import { app, server } from "./socket_server/socket.js"

dotenv.config();
dbconnection();
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(cookieParser())

// Routes Middleware
app.use("/api/auth", auth_route)
app.use("/api/messages", message_route)
app.use("/api/users", user_routes)

server.listen(PORT, () => console.log(`Server is running on port, ${PORT}`));