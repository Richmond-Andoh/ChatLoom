import User from "../models/user_model.js"
import bcrypt from "bcryptjs"

export const register = async(req, res, next) => {
   try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    //check for empty fields
    if(!fullName || !username || !password || !confirmPassword || !gender) {
        throw new Error("All fields arer required");
    }

    // check for password match
    if(password !== confirmPassword){
        throw new Error("Password do not match")
    }

    // check for existing user with username
    const user = await User.findOne({username})
    if(user){
        throw new Error("Username Already exist")
    }

    // hash passwords before sent to the database
    const saltRounds = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, saltRounds)

    // https://avatar-placeholder.iran.liara.run/
    const maleProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const femaleProfile = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    // create new user
    const newUser = new User({
        fullName,
        username,
        password: hashPassword,
        gender,
        profileImage: gender === "male" ? maleProfile : femaleProfile 
    });

    // save new user
    await newUser.save();
    res.status(201).json({
        Message: "User created successfully", 
        _id: newUser._id,
        fulName: newUser.fullName,
        username: newUser.username,
        gender: newUser.gender
    });
    
   } catch (error) {
      console.log("Error in register controller", error.message);
      return res.status(500).json({Message: "Internal Server Error"});
    }
}

export const login = async(req, res, next) => {

}

export const logout = async(req, res, next) => {

}