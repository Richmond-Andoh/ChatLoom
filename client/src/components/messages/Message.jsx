import { useAuthContext } from "../../context/Auth_Context";
import { extractTime } from "../../utils/extractedTime";
import useChat from "../../zustand_store/useChat";

const Message = ({ message }) => {

  const { authUser } = useAuthContext();
  const { selectedChat } = useChat();

  const myMessage = message.senderId === authUser._id;
  const chatClassName = myMessage ? "chat-end" : "chat-start";
  const myProfileImg = myMessage ? authUser.myProfileImg : selectedChat?.ProfileImg;
  const chatBgColor = myMessage ? "chat-bubble-secondary" : "";
  const timeFormat = extractTime(message.createdAt);
  return (
    <>
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={myProfileImg} />
          </div>
        </div>
       
        <div className={`chat-bubble text-white ${chatBgColor}`}>{message.message}</div>
        <div className="chat-footer opacity-50">
          {timeFormat}
        </div>
      </div>
      {/* <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50">12:46</time>
          </div>

          <div className="chat-bubble">I hate you!</div>
          <div className="chat-footer opacity-50">
            Seen at 12:46
          </div>
      </div> */}
    </>
  )
}

export default Message;
