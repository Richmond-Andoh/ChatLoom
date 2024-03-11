import jwt from "jsonwebtoken";

// create jwt token and set to cookie
const jwtToken = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '20d' //
    });

    // set token to cookie
    res.cookie("jwt", token, {
        maxAge: 20 * 24 * 60 * 60 * 1000,
        httpOnly: true, // prevent XSS attacks cross-site scripting attacks
        sameSite: "strict", // CSRF attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV !==  "development" // only sent over https in production
    })
}

export default jwtToken;