import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MyProfile() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    UserData();
  }, []);

  const UserData = async () => {
    let result = await fetch("http://localhost:5000/posts");
    result = await result.json();
    setData(result);
  };

  const DeleteRecord = async (id) => {
    let data = await fetch(`http://localhost:5000/create/${id}`, {
      method: "delete",
    });
    data = await data.json();
    if (data) {
      UserData();
    }
  };

  const removeUser = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <div class="bg-gray-100 min-h-screen flex flex-col justify-between">
        {data.map((item) => (
          <div class="container mx-auto p-4">
            <div id="titles-list">
              <div class="bg-white p-4 rounded shadow-md flex justify-between items-center mb-4">
                <span class="text-lg font-semibold">{item.title}</span>
                <button
                  class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => DeleteRecord(item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
        <footer class="bg-white p-4 shadow-md flex justify-center">
          <button
            class="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
            onClick={removeUser}
          >
            Logout
          </button>
        </footer>
      </div>
    </>
  );
}
