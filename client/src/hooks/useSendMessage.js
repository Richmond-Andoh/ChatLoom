import { useState } from 'react'
import useChat from '../zustand_store/useChat';

const useSendMessage = () => {
  const [loading, setLoading ] = useState(false);
  const{messages, setMessages, selectedChat } = useChat();
  
  const sendMessage = async(message) => {
    setLoading(true);

    try {
        
        const res = await fetch(`/api/messages/send/${selectedChat._id}`, {
           method: "POST",
           headers: {"Content-Type": "application/json"},
           body: JSON.stringify({message})
        })

        const data = res.json();

        if(data.error){
            throw new Error(data.error);
        }

        setMessages([...messages, data])
    } catch (error) {
        toast.error(error.message)
    }
      finally{
        setLoading(false);
      }
   }
   return { sendMessage, loading}
}

export default useSendMessage;
