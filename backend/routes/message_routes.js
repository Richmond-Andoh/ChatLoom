import express from "express"
import { sendMessage, getMessages } from "../controllers/message_controller.js";
import protectedRoute from "../middleware/protected_route.js";


const message_route = express.Router();

message_route.post("/send/:id", protectedRoute, sendMessage);
message_route.get("/:id", protectedRoute, getMessages);


export default message_route;