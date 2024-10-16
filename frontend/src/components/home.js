import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
// import Typical from "react-typical";
export default function Home() {
  const [question, setQuestion] = useState(""); //for storing the question
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // /api/chat"

    try {
      const response = await axios.post("https://lucifer-ai-chatbot-backend.onrender.com/api/chat", {
        question,
      });
      const answer =  response.data.answer; //for storing the answer

      setError(null);
      // Navigate to Searchpage and pass the question and answer as state
      navigate("/Searchpage", { state: { question, answer } });
    } catch (err) {
      setError("Error: " + (err.response?.data?.error || "Server error"));
    }
  };

  return (
    <>
      <div className="right1   min-h-screen bg-black w-10/12 flex content-center justify-center items-center flex-col">
        <div className="text-center text-slate-400 w-full text-3xl mt-16 mb-10 font-bold">
          LUCIFER AI
        </div>

        <div className="input w-full text-center my-6 flex items-center justify-center flex-col">
          <form onSubmit={handleSubmit}>
            <div className="buttonsvg pl-16 w-[50vw] flex">
              <input
                className="w-full p-4 bg-gray-600 rounded-md"
                type="text"
                placeholder="Ask a question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
              <button
                id="sendButton"
                type="submit"
                className="relative -left-20 pl-10"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 mr-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </form>
        </div>

        {error && <div className="text-red-500">{error}</div>}
      </div>
    </>
  );
}