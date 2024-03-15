import { BiMessageRoundedDetail } from "react-icons/bi";

const NoChatSelected = () => {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="px-4 sm:text-xl md:text-xl text-center text-gray-200 font-semibold flex flex-col items-center gap-2">
          <p className="text-3xl">Welcome 👋 Richmond Andoh</p>
          <p className="text-2xl">Select a chat to start messaging</p>
          <BiMessageRoundedDetail className='text-3xl md:text-6xl text-center' />
        </div>
      </div>
    )
}

export default NoChatSelected;