import { useEffect } from "react";
import { useSocketContext } from "../context/Socket_Context"
import useChat from "../zustand_store/useChat";

const useListenMessage = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useChat();

    useEffect(() => {
        socket.on("newMessage", newMessage => {
            setMessages([...messages, newMessage]);
        })

        return () => socket.off("newMessage");

    }, [ messages, setMessages, socket])
  
}

export default useListenMessage;
