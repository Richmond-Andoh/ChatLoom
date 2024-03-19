// import Login from "./pages/Login"
import Register from "./pages/register/Register"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"

const App = () => {
  return (
    <div className='flex p-4 h-screen items-center justify-center'>
      <Toaster position="top-center"/>
      <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App;
