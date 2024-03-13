import React from 'react'
import SearchInput from './SearchInput'
import { SlLogout } from "react-icons/sl";
import Chats from '../conversations/Chats';
import LogoutBtn from '../conversations/LogoutBtn';


const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <SearchInput />

      <div className="divider px-4"></div>

      <Chats />
      {/* <LogoutBtn /> */}
      <LogoutBtn />
    </div>
  )
}

export default Sidebar
