import useGetMessages from "../../hooks/useGetMessages";
import MessageLoadingSkeleton from "../loading_skeleton/Message_Loading_Skeleton";
import Message from "./Message";

const Messages = () => {
  const { loading, messages } = useGetMessages;
  
  return (
    <div className='px-4 flex-1 overflow-auto'>
    {!loading && messages.length > 0 (
      messages.map((message) => <Message key={message._id} message={message}/>)
    )}
    {  loading && [...Array(3)].map((_, idx) => <MessageLoadingSkeleton key={idx}/>)}

    {!loading && messages.length === 0 && <p className="text-center">Send a text to begin conversation.</p>}
    </div>
  )
}

export default Messages;
