import { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
   const [ message, setMessage ] = useState("")
   const { loading, sendMessage } = useSendMessage();

  const handleSendMessage = async(e) => {
    e.preventDefault();

    if(!message) return;
    await sendMessage(message);
    sendMessage("");
  };
  
  return (
    <form className='px-4 my-3' onSubmit={handleSendMessage}>
        <div className='w-full relative'>
          <input type="text" value={message} onChange={(e) => sendMessage(e.target.value)} placeholder="Send a message" className="me-7 input block bg-gray-500 p-3 rounded-lg text-sm text-white w-full" />

          <button type="submit" className="absolute inset-y-0 flex end-0 items-center pe-3 text-2xl">
           {loading ?  <span className="loading loading-spinner text-info"></span> : <IoSendSharp /> }
          </button>
        </div>
    </form>
  )
}

export default MessageInput
