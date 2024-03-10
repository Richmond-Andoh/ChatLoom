import mongoose, { model } from "mongoose"

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minLength: 8,
    },

    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },

    profileImage: {
        type: String,
        default: ""
    }
})


const User = mongoose.model("User", userSchema)

export default User;