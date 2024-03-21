import { SlLogout } from 'react-icons/sl'
import useLogout from '../../hooks/useLogout'


const LogoutBtn = () => {

  const { loading, logout } = useLogout()
  return (
    <div className='mt-auto'>
       {!loading ? (
        <SlLogout className='w-6 h-5 mt-2 text-white cursor-pointer' 
        onClick={logout}
      />
       ) : <span className="loading loading-spinner text-info"></span>
      }
    </div>
  )
}

export default LogoutBtn
