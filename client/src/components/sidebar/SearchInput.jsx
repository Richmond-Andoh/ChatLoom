import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
  return (
    <form className='flex'>
        <input type="text" placeholder='Search...' className='input input-bordered rounded-full mr-2'/>
        <button type='submit' className='btn btn-circle btn-primary btn-sky-600 text-white'>
          <IoIosSearch />
        </button>
    </form>
  )
}

export default SearchInput
