import React from "react";
import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import logo from './logo.png'
import userlogo from './userlogo.png'

export default function Searchpage({ selectedAnswer }) {
  const location = useLocation();
  const { question = "No question provided", answer = "" } = location.state || {};

  //This  Function is used to  clean and format the answer which we are fetching from are database
  const cleanAnswer = (answer) => {
    return answer
      .replace(/[#*]+/g, "")   
};

  const formattedAnswer = cleanAnswer(selectedAnswer || "");

  return (
    <>
      <div className="right2 w-10/12 flex flex-col overflow-auto items-center h-fit m-auto">
        <div className="box1 flex w-full pt-3 mt-5 pb-10 mb-10 text-3xl font-bold text-slate-400 justify-center items-center">
          LUCIFER AI
        </div>

        <div className="box2 py-6 flex justify-start w-[50vw] items-center m-auto space-x-5">
          <img
            className="w-8 rounded-full"
            src={userlogo}
            alt=""
          />
          <div id="question1">{question}</div>
        </div>

        <div className="box3 py-6 bg-gray-700 flex justify-center w-full items-center">
          <div className="box overflow-hidden w-[50vw] flex justify-start space-x-5">
            <div className="w-8 h-8">
              <div className="image w-8 rounded-full">
                <img className="image w-8 h-8 rounded-full" src={logo} alt="logo" />
              </div>
            </div>
            <div className="flex flex-col space-y-5">
              <div id="question2" className="text-slate-400">
                {question}
              </div>
              <div id="solution" className="text-white">
                {/* This is the response we are getting from Gemini API */}
                <ReactMarkdown>{answer}</ReactMarkdown>


                {/* And this is the response we are getting from are data base */}
                {formattedAnswer && (
                  <div className="">
                    <p>{formattedAnswer}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="input w-full -bottom-2 text-center mt-10 flex items-center justify-center flex-col">
          <div className="text-xs py-2 pr-10 text-center opacity-70">
            Free Research Preview. LUCIFER AI may produce inaccurate information about people, places, or facts.
          </div>
        </div>
      </div>
    </>
  );
}

