import useGetMessages from "../../hooks/useGetMessages";
import MessageLoadingSkeleton from "../loading_skeleton/Message_Loading_Skeleton";

const Messages = () => {
  const { loading, messages } = useGetMessages;
  return (
    <div className='px-4 flex-1 overflow-auto'>

    {  loading && [...Array(3)].map((_, idx) => <MessageLoadingSkeleton key={idx}/>)}
    </div>
  )
}

export default Messages;
