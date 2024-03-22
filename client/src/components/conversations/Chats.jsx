import Chat from "./Chat"
import { getRandomEmoji } from "../../utils/userEmojis";
import useGetChat from "../../hooks/useGetChat";

const Chats = () => {

  const { loading, chats } = useGetChat();
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
