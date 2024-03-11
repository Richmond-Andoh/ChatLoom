import React from 'react'
import SearchInput from './SearchInput'
import { SlLogout } from "react-icons/sl";


const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <SearchInput />

      <div className="divider px-5"></div>

      {/* <LogoutBtn /> */}
      <SlLogout className='cursor-pointer' />
    </div>
  )
}

export default Sidebar
