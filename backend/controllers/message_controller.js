import Chat from "../models/chat_model.js";
import Message from "../models/message_model.js";


export const sendMessage = async(req, res, next) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let chat = await Chat.findOne({
            participants: { $all: [senderId, receiverId]},  // find the chats where both users are participating in it
        })

        // if no chat, create one
        if(!chat){
            chat = await Chat.create({
                participants: [senderId, receiverId],
                // messages: []
            })
        }

        // create new message
        const newMessage = new  Message({
            senderId,
            receiverId,
            message
        })

        // push new messages to chat 
        if(newMessage){
            chat.messages.push((newMessage));
        }

        //this will run in parallel
        await Promise.all([chat.save(), newMessage.save()])

        // socket.io functionality here

        return res.status(201).json({message : 'Message sent successfully', newMessage})
    } catch (error) {
        console.log("Error in sendMessage controller", error.message);
        return res.status(500).json({Error: "Internal Server Error"})
    }
}

export const getMessages = async(req, res, next) => {
    try {
        const {id: userToChatId } = req.params;
        const senderId = req.user._id;

        // check for messages in database
        const  chatsWithUser = await Chat.findOne({
            participants: { $all: [senderId, userToChatId]},
        }).populate('messages'); // no reference messages itself
        
        return res.status(200).json(chatsWithUser ? chatsWithUser.messages : null );
    } catch (error) {
        console.log("Error in sendMessage controller", error.message);
        return res.status(500).json({Error: "Internal Server Error"})
    }
}