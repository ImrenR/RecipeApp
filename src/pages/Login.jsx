/*


import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { loginAccount } from "../features/authSlice";
import { useState } from "react";

const Login = () => {
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const dispatch= useDispatch();
const navigate= useNavigate();
const handleSubmit=(e)=> {
  e.preventDefault();
navigate("/");
dispatch(loginAccount({email,password}))
}

   return(
  <div className=" flex items-center justify-center min-h-screen bg-gray-200">
    <form  onSubmit={handleSubmit}  className="bg-white p-8 rounded-lh shadow-md w-full max-w-sm flex flex-col gap-6">
        <p className="text-center text-blue-400 font-mono ">LOG IN</p>
     
<div className="my-2 py-5 ">
<label htmlFor="email">Email :</label>
<input 
className="px-4 py-2 my-2 mx-6 border border-gray-200 rounded-md font-semibold hover:bg-blue-400 transition-colors"
type="text" id="email" placeholder="Enter your email"
onChange={(e)=> setEmail(e.target.value)}
/>

<label htmlFor="pass">Password :</label>
<input 
className="px-4 py-3 border border-gray-200 rounded-md font-semibold hover:bg-blue-400 transition-colors"
type="password" id="pass" placeholder="Enter your password"
onChange={(e)=> setPassword(e.target.value)}
/>
<button 
className="w-full mt-4 bg-blue-500 text-white py-2 rounded-mg hover:bg-red-300 transition-all"
type="submit"


>LOGIN</button>
</div>


  </form>
  </div>)
}

export default Login

*/