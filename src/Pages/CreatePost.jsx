import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreatePost() {
    const [title , setTitle] = useState("")
    const [description , setDescription] = useState("")
    const navigate = useNavigate()

    const Create = async (e)=>{
        e.preventDefault()
        let data = await fetch('http://localhost:5000/create' ,{
            method:'post',
            body:JSON.stringify({title , description}),
            headers:{'Content-Type' :'application/json'}
        })
        let result = await data.json()
        if(result){
            navigate('/')
        }
    }
  return (
    <div class="bg-gray-100 flex items-center justify-center h-screen">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">{} Create Your Post</h2>
        <form>
            <div class="mb-4">
                <label for="input1" class="block text-gray-700 font-semibold mb-2">Title</label>
                <input type="text" id="Title" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            </div>
            <div class="mb-4">
                <label for="Description" class="block text-gray-700 font-semibold mb-2">Description</label>
                <input type="text" id="input2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"  value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
            </div>
            <div class="text-center">
                <button type="submit" class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={Create}>Submit</button>
            </div>
        </form>
    </div>
    </div>
  )
}
