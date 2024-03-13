import { IoSendSharp } from "react-icons/io5";

const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
        <div className='w-full relative'>
          <input type="text" placeholder="Send a message" className="me-7 input block bg-gray-500 p-3 rounded-lg text-sm text-white w-full" />

          <button type="submit" className="absolute inset-y-0 flex end-0 items-center pe-3 text-2xl">
            <IoSendSharp />
          </button>
        </div>
    </form>
  )
}

export default MessageInput
