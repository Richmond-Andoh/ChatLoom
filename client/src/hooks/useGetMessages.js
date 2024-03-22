import React, { useEffect, useState } from 'react'
import useChat from '../zustand_store/useChat';
import toast from 'react-hot-toast';

const useGetMessages = () => {
   const [messages, setMessages, selectedChat] = useChat();

   const { loading, setLoading } = useState(false);

   useEffect(() => {
    
    const getMessages =  async() => {
        setLoading(true);
    
        try {
            
            //fetch messages using the backend endpoint
    
            const res = await fetch(`/api/messages/${selectedChat._id}`);
            const data = res.json();
    
            // check for errors in incoming data
            if(!data) throw new Error('No Data');
            setMessages(data)
        } catch (error) {
            toast.error(error.message)
        }
         finally{
            setLoading(false);
        }
    }
     
    if(selectedChat?._id) getMessages();
   }, [selectedChat?._id, setMessages])

   return { loading, messages}
}

export default useGetMessages
