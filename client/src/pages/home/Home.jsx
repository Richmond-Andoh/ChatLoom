import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden 
       bg-gray-300 shadow-3xl bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0'>
      
      <Sidebar />
    </div>
  )
}

export default Home
