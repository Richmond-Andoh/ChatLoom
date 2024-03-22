import Messages from './Messages'
import MessageInput from './MessageInput'
import { BiMessageRoundedDetail } from "react-icons/bi";
import NoChatSelected from './NoChatSelected';
import useChat from '../../zustand_store/useChat';
import { useEffect } from 'react';


const MessageContainer = () => {
  const { selectedChat, setSelectedChat } = useChat();

  useEffect(() => {

    // unmount   or cleanup function
    return () => setSelectedChat(null);
  }, [ setSelectedChat ])
  return (
    <div className="md:min-w-[550px] flex flex-col w-full">
       { !selectedChat ? <NoChatSelected /> : (
        <>
            {/* Header */}
            <div className='bg-gray-500 px-4 py-2 mb-2'>
              <span className='label-text'>To:</span>{" "}
              <span className='text-info-500 px-4'>{selectedChat.fullname}</span>
            </div>
          
          <Messages />

          <MessageInput />
        </>
       )
       }
    </div>
  )
}

export default MessageContainer

// const NoChatSelected = () => {
//   return (
//     <div className="flex items-center justify-center w-full h-full">
//       <div className="px-4 sm:text-xl md:text-xl text-center text-gray-200 font-semibold flex flex-col items-center gap-2">
//         <p>Welcome 👋 Richmond Andoh</p>
//         <p>Select a chat to start messaging</p>
//         <BiMessageRoundedDetail className='text-3xl md:text-6xl text-center' />
//       </div>
//     </div>
//   )
// }