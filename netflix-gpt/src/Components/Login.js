/* eslint-disable jsx-a11y/img-redundant-alt */
import { BG_URL } from "../Utils/constant"
import Header from "./Header"
import {useState} from "react"

const Login = () => {

  const [signInForm,setSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setSignInForm(!signInForm);
  }

  return (
     <div className="relative bg-black">
       <Header />

       {/* BACKGROUND IAMGE APPEAR ONLY ABOVE MEDIUM SCREENS */}
       <div className="z-10 min-h-screen bg-black  md:bg-transparent">
        <img className=" absolute hidden md:block min-h-screen w-full h-full bg-cover bg-center" src={BG_URL} alt="Netflix Background Image On login page" />  
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* LOGIN FORM */}
      <form className="absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white md:p-12 md:bg-opacity-70 md:bg-black md:w-1/3 md:rounded-md">
        <h1 className=" font-bold text-3xl py-4">{signInForm ? "Sign In" : "Sign Up"}</h1>
        {!signInForm && <input type="text" placeholder="Email Address" className="p-2 my-5 h-12 w-full bg-zinc-800 rounded-lg" />}
        <input type="text" placeholder="Full Name" className="p-2 my-5 h-12 w-full bg-zinc-800 rounded-lg" />
        <input type="password" placeholder="Password" className="p-2 my-5 h-12 w-full bg-zinc-800 rounded-lg" />
        <button className="p-0.5 my-6 w-full h-12 rounded-lg bg-red-700">{signInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4  text-zinc-500"onClick={toggleSignInForm}>{signInForm ? "New to Netflix ? " : "Already a user ? "} <span className="text-white cursor-pointer hover:underline">{signInForm ? "Sign Up now" : "Sign In now"}</span> </p>

      </form>
    </div>  
  )
}

export default Login
