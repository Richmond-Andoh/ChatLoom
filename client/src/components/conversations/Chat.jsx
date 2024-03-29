import { useSocketContext } from "../../context/Socket_Context";
import useChat from "../../zustand_store/useChat"

const Chat = ({chat, lastIndex, emoji}) => {

  const { selectedChat, setSelectedChat } = useChat();

  const isSelected = selectedChat._id === chat._id;

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(chat._id);
  return (
    <>
        <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
          ${isSelected ? "bg-sky-500" : ""}
        `}>
          onClick = {() => setSelectedChat(chat)}
          
          <div className={`avata ${isOnline ? "online" : ""}`}>
            <div className="w-12 rounded-full">
              <img src={chat.profileImage} />
            </div>
          </div>
          <div className="flex flex-1 flex-col">
           <div className='flex gap-3 justify-between'>
            <p className='text-gray-200'>{chat.fullname}</p>
            <span className='text-xl'>{emoji}</span>
          </div>
        </div>
      </div>
      
      {!lastIndex && <div className="divider px-3 my-0 py-1 h-1" />
}

    </>
  )
}

export default Chat
