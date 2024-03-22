import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import useChat from "../../zustand_store/useChat";
import useGetChat from "../../hooks/useGetChat";
import toast from "react-hot-toast";

const SearchInput = () => {

  const [ search, setSearch ] = useState("");
  const { setSelectedChat } = useChat();
  const { chats } = useGetChat();

  const handleSearch = async(searhc) => {
    if(!search) return;

    if(search.length < 3){
     return toast.error("Search input must be more than three characters");
    }

    const chat = chats.find(c => c.fullname.toLowerCase().includes(search.toLocaleLowerCase()));

    if(chat){
      setSelectedChat(chat);
      setSearch("");
    } else toast.error("No such user found");
  }
  return (
    <form className='flex'>
        <input type="text" value={search} onChange={(e => setSearch(e.target.value))} placeholder='Search...' className='input input-bordered rounded-full mr-2'/>
        <button type='submit' className='btn btn-circle btn-primary btn-sky-600 text-white'>
          <IoIosSearch />
        </button>
    </form>
  )
}

export default SearchInput
