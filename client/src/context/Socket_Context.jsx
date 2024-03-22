import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./Auth_Context";

const SocketContext = createContext();

const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({children}) => {
    const [socket, setSocket] = useState(null);
    const [ onlineUsers, setOnlineUsers ] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {

        if(authUser){
            const socket = io("http://localhost:5900", {
                query: {
                    userId: authUser._id,
                }
            });

            setSocket(socket);

            return () => socket.close();
        }
        else {
            if(socket){
                socket.close();
                setSocket(null);
            }

        }


    }, [])



    return <SocketContext.Provider value={{socket, onlineUsers, }}>{children}</SocketContext.Provider>
}