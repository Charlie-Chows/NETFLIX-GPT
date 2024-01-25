/* eslint-disable jsx-a11y/img-redundant-alt */
import { BG_URL } from "../Utils/constant"
import Header from "./Header"

const Login = () => {
  return (
    <div>
       <Header />

       {/* BACKGROUND IAMGE APPEAR ONLY ABOVE MEDIUM SCREENS */}
      <div className=" relative z-10 min-h-screen bg-black  md:bg-transparent">
        <img className="hidden md:block min-h-screen w-full h-full bg-cover bg-center" src={BG_URL} alt="Netflix Background Image On login page" />       
      </div>


      <form className="absolute z-30">
        <input type="text" placeholder="Email Address" className="p-2 m-2 " />
        <input type="password" placeholder="Password" className="p-2 m-2" />
        <submit className="p-4 m-4">Sign In</submit>
      </form>

    </div>
  )
}

export default Login
