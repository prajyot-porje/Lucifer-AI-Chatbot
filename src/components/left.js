import '../App.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Left() {
  const [chats, setChats] = useState([]); // State to store fetched chat data
  const [loading, setLoading] = useState(true); // State to handle loading
  const [selectedAnswer, setSelectedAnswer] = useState(null); // State to store the selected answer

  // Fetch chat data from the backend
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/chats'); // Replace with your API endpoint
        const data = await response.json();
        setChats(data); // Assuming data is an array of chat objects
        setLoading(false); // Stop loading when data is fetched
      } catch (error) {
        console.error('Error fetching chats:', error);
        setLoading(false); // Stop loading even if there's an error
      }
    };

    fetchChats();
  }, []); // The empty array ensures this useEffect only runs once

  // Fetch answer when a question is clicked
  const handleChatClick = async (question) => {
    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });
      const data = await response.json();
      setSelectedAnswer(data.answer); // Set the selected answer
    } catch (error) {
      console.error('Error fetching answer:', error);
    }
  };

  return (
    <div className="left min-h-screen overflow-y-auto overflow-x-hidden items-center bg-gray-500 w-1/5"> 
      <Link
        id="newchat"
        to="/"
        className="w-[90%] py-2 m-2 px-9 space-x-2 border-white border rounded-md flex mx-4 justify-center items-center hover:opacity-70"
      >
        <div className="mr-5">New Chat</div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon-md"
        >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.7929 2.79289C18.0118 1.57394 19.9882 1.57394 21.2071 2.79289C22.4261 4.01184 22.4261 5.98815 21.2071 7.20711L12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16H9C8.44772 16 8 15.5523 8 15V12C8 11.7348 8.10536 11.4804 8.29289 11.2929L16.7929 2.79289ZM19.7929 4.20711C19.355 3.7692 18.645 3.7692 18.2071 4.2071L10 12.4142V14H11.5858L19.7929 5.79289C20.2308 5.35499 20.2308 4.64501 19.7929 4.20711ZM6 5C5.44772 5 5 5.44771 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34314 4.34315 3 6 3H10C10.5523 3 11 3.44771 11 4C11 4.55228 10.5523 5 10 5H6Z"
                  fill="currentColor"
                ></path>
               </svg>
      </Link>

      <div className="text-xs m-4 mx-8 text-white">Today</div>

      {/* Loading indicator */}
      {loading ? (
        <div className="text-white mx-8">Loading...</div>
      ) : (
        <div className="chats flex flex-col justify-center items-center space-y-2">
          {/* Dynamically render each chat */}
          {chats.map((chat, index) => (
            <div
              key={index}
              className="opacity-80 w-[85%] px-5 py-2 rounded-md bg-gray-600 cursor-pointer flex justify-start items-center"
              onClick={() => handleChatClick(chat.question)} // Fetch answer on click
            >
              <div className="w-4 h-4">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div className="truncate ml-2">{chat.question}</div>
            </div>
          ))}
        </div>
      )}

      {/* Display the selected answer if available */}
      {selectedAnswer && (
        <div className="m-4 p-4 bg-white text-black rounded-md">
          <h3 className="font-bold">Answer:</h3>
          <p>{selectedAnswer}</p>
        </div>
      )}
    </div>
  );
}