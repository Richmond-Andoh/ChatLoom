import mongoose, { model } from "mongoose"

const chatSchema = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,  // array of user ids that are in the conversation
        ref: "User",
    }],

    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        //default: []
    }]
}, { timestamps: true})


const Chat = mongoose.model("Chat", chatSchema)

export default Chat;