import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useLogin } from '../../hooks/useLogin';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleLogin = async(e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className='items-start justify-center flex flex-col min-w-48 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-2xl bg-zinc-900 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0'>
            <h1 className='text-3xl text-center font-semibold text-gray-300 mb-5'>
                Login
                <span className='text-blue-500 pl-3'>
                    ChatLoom
                </span>
            </h1>

            <form onSubmit={handleLogin}>
                <div className='p-7'>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target)} className="grow" placeholder="Username" />
                    </label>

                    <label className="input input-bordered w-full flex items-center gap-2 mt-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                      <input type="password" value={password} onChange={(e) => setPassword(e.target)} className="grow" placeholder="Password" />
                    </label>

                    <Link to={"/register"} className='text-sm mt-3 hover:underline hover:text-blue-600 inline-block'>
                      {"Don't "} have account
                    </Link>
                </div>
                <div className='px-7'>
                  <button className="btn btn-md btn-active btn-primary w-full text-white"
                    disabled={loading}
                  >{loading ? <span className="loading loading-spinner text-info"></span> : "Login"}</button>
                </div>
            </form>
      </div>
    </div>
  )
}

export default Login;
