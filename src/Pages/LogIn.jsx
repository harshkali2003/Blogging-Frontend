import React , { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'


export default function LogIn() {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const navigate = useNavigate()

    const CollectData = async (e)=>{
        e.preventDefault()
        let data = await fetch('http://localhost:5000/log' ,{
            method:'post',
            body:JSON.stringify({ email , password}),
            headers:{'Content-Type' : 'application/json'}
    
        })
        let result = await data.json()
        if(result){
            navigate('/')
            localStorage.getItem('users')
        }
        else{
            navigate('/sign')
        }
    }
  return (
    <div  class="bg-gray-100 flex items-center justify-center h-screen">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
   <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>

   <form >
       <div class="mb-4">
           <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
               Email
           </label>
           <input
               class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="email" type="email" placeholder="Enter your email" required value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
       </div>

       <div class="mb-6">
           <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
               Password
           </label>
           <input
               class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
               id="password" type="password" placeholder="Enter your password" required value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
       </div>

       <div class="flex items-center justify-between">
           <button
               class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
               type="submit" onClick={CollectData}>
               Sign In
           </button>
           
       </div>
   </form>
   <p class="mt-3 text-lg">New User <Link class="text-red-600" to="/sign">Sign Up</Link></p>
</div>
</div>
  )
}
