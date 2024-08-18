import React from 'react'

export default function About() {
  return (
    <div class="bg-gray-100">
  
    <section class="bg-cover bg-center h-screen" >
        <div class="bg-black bg-opacity-50 h-full flex items-center justify-center">
            <h1 class="text-yellow-500 text-5xl font-bold">Welcome to Blog Yourself</h1>
        </div>
    </section>

    <section class="py-12">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-semibold text-gray-800">Website Motive</h2>
                <p class="mt-4 text-gray-600">“Your first blog posts won’t be perfect, but you just have to do it. You have to start somewhere.”</p>
            </div>
            <div class="flex flex-wrap justify-center">
                <div class="w-full md:w-1/3 p-4">
                    <div class="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
                        <img src="https://example.com/history.jpg" alt="Our History" class="w-full h-48 object-cover"/>
                        <div class="p-6">
                            <h3 class="text-2xl font-semibold text-gray-800">Our History</h3>
                            <p class="mt-4 text-gray-600">Founded in 2010, in a small town of Bihar ...</p>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/3 p-4">
                    <div class="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
                        <img src="https://example.com/ingredients.jpg" alt="Our Services" class="w-full h-48 object-cover"/>
                        <div class="p-6">
                            <h3 class="text-2xl font-semibold text-gray-800">Our Services</h3>
                            <p class="mt-4 text-gray-600">We try to provide special services to each of our customer...</p>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/3 p-4">
                    <div class="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
                        <img src="https://example.com/community.jpg" alt="Community" class="w-full h-48 object-cover"/>
                        <div class="p-6">
                            <h3 class="text-2xl font-semibold text-gray-800">Community</h3>
                            <p class="mt-4 text-gray-600">Blog Yourself is committed to giving back to the community that has supported us...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section class="bg-gray-50 py-12">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-semibold text-gray-800">Meet Us</h2>
                <p class="mt-4 text-gray-600">The people behind the perfect burger.</p>
            </div>
            <div class="flex flex-wrap justify-center">
               
                <div class="w-full sm:w-1/2 md:w-1/4 p-4">
                    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src="https://example.com/manager.jpg" alt="Founder" class="w-full h-48 object-cover"/>
                        <div class="p-6 text-center">
                            <h3 class="text-xl font-semibold text-gray-800">Harsh Vardhan</h3>
                            <p class="text-gray-600">Founder</p>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    </section>

  
    <footer class="bg-gray-800 py-6">
        <div class="container mx-auto text-center text-white">
            <p>&copy; 2024 Burger Haven. All rights reserved.</p>
        </div>
    </footer>
    </div>
  )
}
