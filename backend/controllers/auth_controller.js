import User from "../models/user_model.js"
import bcrypt from "bcryptjs"
import jwtToken from "../utils/jwt_token.js";

export const register = async(req, res, next) => {
   try {
    if(req.body && req.body.fullname){
            const { fullname, username, password, confirmPassword, gender } = req.body;
        //check for empty fields
        if(!fullname || !username || !password || !confirmPassword || !gender) {
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
            fullname,
            username,
            password: hashPassword,
            gender,
            profileImage: gender === "male" ? maleProfile : femaleProfile 
        });

        // save new user
        jwtToken(newUser._id, res)
        await newUser.save();
        res.status(201).json({
            Message: "User created successfully", 
            _id: newUser._id,
            fulName: newUser.fullName,
            username: newUser.username,
            password: newUser.password,
            gender: newUser.gender,
            profileImage: newUser.profileImage
        });
    }
}   catch (error) {
        console.log("Error in register controller", error.message);
        return res.status(500).json({Message: "Internal Server Error"});
    }
}

export const login = async(req, res, next) => {
   try {
       const { username, password } = req.body;

       // check user existence and password match
       const user = await User.findOne({ username })
       const isPasswordValid = await bcrypt.compare(password, user?.password || "");

       if(!user || !isPasswordValid){
        throw new Error("Invalid credentials");
       }

       jwtToken(user._id, res);
        return res.status(201).json({
       
            Message: `${user.username} has loggedIn successfully`, 
            _id: user._id,
            fulName: user.fullname,
            username: user.username,
            password: user.password,
            gender: user.gender,
            profileImage: user.profileImage
        })

    } catch (error) {
        console.log("Error in login controller", error.message);
        return res.status(500).json({Message: "Internal Server Error"});
    }
}


export const logout = async(req, res, next) => {
  try {
    res.cookie("jwt", "", {maxAge: 0});
    return res.status(200).json({Message: "has logout successfully"})
    
  } catch (error) {
        console.log("Error in logout controller", error.message);
        return res.status(500).json({Message: "Internal Server Error"});
  }
}