import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Feedback() {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [comments , setComments] = useState("")
    const navigate = useNavigate()

    const FeedbackData = async (e)=>{
        e.preventDefault()
        let data = await fetch('http://localhost:5000/feedback',{
            method:"post",
            body:JSON.stringify({name , email , comments}),
            headers:{'Content-Type' : 'application/json'}
        })
        let result = await data.json()
        if(result){
            alert('Form has been submitted')
            navigate("/")
        }
        else{
            alert('Some Error has been occurred')
        }
    }
  return (
   
    <div class="bg-gray-100 flex items-center justify-center h-screen">
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
      <h2 class="text-2xl font-semibold text-gray-800 text-center mb-6">
        We Value Your Feedback!
      </h2>

      <form id="feedbackForm" class="space-y-4">
        <div>
          <label for="name" class="block text-gray-700 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500" value={name} onChange={(e)=>{setName(e.target.value)}}
          />
        </div>

        <div>
          <label for="email" class="block text-gray-700 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500" value={email} onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>

       

        <div>
          <label for="comments" class="block text-gray-700 font-medium">
            Comments
          </label>
          <textarea
            id="comments"
            name="comments"
            rows="4"
            required
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500" value={comments} onChange={(e)=>{setComments(e.target.value)}}
          ></textarea>
        </div>

        <div class="text-center">
          <button
            type="submit"
            class="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600 transition" onClick={FeedbackData}
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}
