import React, { useState, useEffect } from "react";

export default function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    UserData();
  }, []);

  const UserData = async () => {
    let result = await fetch("http://localhost:5000/posts");
    result = await result.json();
    setData(result);
  };
  console.log(data);

  return (
    <>
      <div class="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
        {data.map((item) => (
          <div key={item._id} class="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">{item.title}</h2>
            <p class="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
