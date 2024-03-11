import User from "../models/user_model.js";

export const getAllUsers = async(req, res, next) => {
    try {
        // get logged in user id first
        const loggedInUserId = req.user._id;

        // filter all users
        let filteredUsers = await User.find({ _id: {$ne : loggedInUserId} });   // exclude the current logged-in user to only return those that are not the current logged to only return those that are not the logged in
        return res.status(200).json(filteredUsers)
    } catch (error) {
        console.log("Error in getAllUsers controller", error.message);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}