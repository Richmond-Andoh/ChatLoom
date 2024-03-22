// import Login from "./pages/Login"
import Register from "./pages/register/Register"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import "./App.css"
import { Navigate, Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/Auth_Context"

const App = () => {

  const { authUser } = useAuthContext();
  
  return (
    <div className='flex p-4 h-screen items-center justify-center'>
      <Toaster position="top-center"/>
      <Routes>
        <Route path="/" element= {authUser ? <Home /> : <Navigate to={"/login"}/>} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={authUser ? <Navigate to="/" /> : <Register />} />
      </Routes>
    </div>
  )
}

export default App;
