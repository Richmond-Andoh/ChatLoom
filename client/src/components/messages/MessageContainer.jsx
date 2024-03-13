import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'

const MessageContainer = () => {
  return (
    <div className="md:min-w-[550px] flex flex-col w-full">
       {/* Header */}
        <div className='bg-gray-500 px-4 py-2 mb-2'>
          <span className='label-text'>To:</span>{" "}
          <span className='text-info-500 px-4'>Luke Skywalker</span>
        </div>
      
      <Messages />

      <MessageInput />
    </div>
  )
}

export default MessageContainer
