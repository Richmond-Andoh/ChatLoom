import Chat from "./Chat"
import useChat from "../../zustand_store/useChat"
import { getRandomEmoji } from "../../utils/userEmojis";

const Chats = () => {

  const { loading, chats } = useChat();
  return (
    <div className='flex flex-col overflow-auto'>
        
        { chats.map((chat, index) => {
          <Chat key={chat._id} chat={chat} 
            emoji={getRandomEmoji()}
            lastIndex = {index === chats.length - 1}
          />
        })}

       { loading ? <span className="loading loading-spinner text-info"></span> : ""}
    </div>
  )
}

export default Chats
