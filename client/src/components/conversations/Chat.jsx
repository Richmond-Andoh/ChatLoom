import React from 'react'

const Chat = () => {
  return (
    <>
        <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
           <div className="avatar online">
                <div className="w-12 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
        <div className="flex flex-1 flex-col">
           <div className='flex gap-3 justify-between'>
            <p className='text-gray-200'>Richy Andoh</p>
            <span className='text-xl'>😇</span>
           </div>
        </div>
      </div>

      <div className="divider px-3 my-0 py-1 h-1" />
    </>
  )
}

export default Chat
