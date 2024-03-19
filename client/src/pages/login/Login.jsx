import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='items-start justify-center flex flex-col min-w-48 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-2xl bg-zinc-900 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0'>
            <h1 className='text-3xl text-center font-semibold text-gray-300 mb-5'>
                Login
                <span className='text-blue-500 pl-3'>
                    ChatLoom
                </span>
            </h1>

            <form action="">
                <div className='p-7'>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" className="grow" placeholder="Username" />
                    </label>

                    <label className="input input-bordered w-full flex items-center gap-2 mt-6">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                      <input type="text" className="grow" placeholder="Email" />
                    </label>

                    <Link to={"/register"} className='text-sm mt-3 hover:underline hover:text-blue-600 inline-block'>
                      {"Don't "} have account
                    </Link>
                </div>
                <div className='px-7'>
                  <button className="btn btn-md btn-active btn-primary w-full">Primary</button>
                </div>
            </form>
      </div>
    </div>
  )
}

export default Login;
