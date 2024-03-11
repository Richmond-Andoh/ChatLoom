import express from "express"
import protectedRoute from "../middleware/protected_route.js";
import { getAllUsers } from "../controllers/user_controller.js";

const user_routes = express.Router();

user_routes.get("/", protectedRoute, getAllUsers)

export default user_routes