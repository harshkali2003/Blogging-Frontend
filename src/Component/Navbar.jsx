import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    
    const user = localStorage.getItem("users"); 
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
  
    setIsLoggedIn(true);
    localStorage.setItem("users", "someUserData");
  };

 
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-medium text-gray-800">BLOG YOURSELF</h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-800">
              HOME
            </Link>
            <Link to="/create" className="text-gray-600 hover:text-gray-800">
              CREATE POST
            </Link>

            {!isLoggedIn && (
              <Link
                to="/profile"
                className="text-gray-600 hover:text-gray-800"
              >
                MY PROFILE
              </Link>
            )}

            {isLoggedIn && (
              <Link
                to="/log"
                className="text-gray-600 hover:text-gray-800"
                onClick={handleLogin}
              >
                LOGIN
              </Link>
            )}
          </div>
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block text-gray-600 hover:text-gray-800">
              HOME
            </Link>
            <Link
              to="/create"
              className="block text-gray-600 hover:text-gray-800"
            >
              CREATE POST
            </Link>
            {!isLoggedIn && (
              <Link
                to="/profile"
                className="text-gray-600 hover:text-gray-800"
                
              >
                MY PROFILE
              </Link>
            )}

            {isLoggedIn && (
              <Link
                to="/log"
                className="text-gray-600 hover:text-gray-800"
                onClick={handleLogin}
              >
                LOGIN
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
