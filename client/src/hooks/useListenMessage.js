import { useEffect } from "react";
import { useSocketContext } from "../context/Socket_Context"
import useChat from "../zustand_store/useChat";

const useListenMessage = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useChat();

    useEffect(() => {
        socket.on("newMessage", newMessage => {
            newMessage.shouldShake = true; // Add shaking animation to the message if it's not from me (the user)
            
            // add message receive notification sound
            const notificationSound = new Audio();
            notificationSound.play();
            setMessages([...messages, newMessage]);
        })

        return () => socket.off("newMessage");

    }, [ messages, setMessages, socket])
  
}

export default useListenMessage;
