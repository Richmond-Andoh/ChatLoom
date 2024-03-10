import express from "express"
import dotenv from "dotenv"
import auth_route from "./routes/auth_route.js";
import dbconnection from "./db/dbconnection.js";
const app = express();

dotenv.config();
dbconnection();
const PORT = process.env.PORT || 8000

app.use("/api/auth", auth_route)


app.listen(PORT, () => console.log(`Server is running on port, ${PORT}`));