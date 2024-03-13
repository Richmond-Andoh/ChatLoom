import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[600px] rounded-lg overflow-hidden w-full
      bg-gray-300 shadow-2xl bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home
