import jwt from "jsonwebtoken";
import User from "../models/user_model.js";

const protectedRoute = async(req, res, next) => {
    try {
        // get token
        const token = req.cookies.jwt;

        if(!token){
            return res.status(401).json({Error: "Unathorize- not toke provided"})
        }

        // decode the token or verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded) {
            return res.status(401).json({Error: "Unathorize- Invalid token"})
        }

        const user = await User.findById(decoded.userId).select("-password")
        if(!user){
            return res.status(401).json({Error: "User not found"})
        }

        req.user = user;

        next();
    } catch (error) {
        console.log("Error in protected middleware", error.message);
        return res.status(500).json({message: "Internal Server Error"})
    }
}

export default protectedRoute;