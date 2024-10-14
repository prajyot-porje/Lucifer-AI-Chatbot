import '../App.css'
import React from 'react';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export default function Searchpage() {
  const location = useLocation();
  const { question = "No question provided", answer = "No answer available" } = location.state || {};

  return (
    <>
      <div className="right2 w-10/12 flex flex-col overflow-auto items-center h-fit m-auto">
        <div className="box1 flex w-full pt-3 mt-5 pb-10 mb-10 text-3xl font-bold text-slate-400 justify-center items-center">
          LUCIFER AI
        </div>

        <div className="box2 py-6 flex justify-start w-[50vw] items-center m-auto space-x-5">
          <img
            className="w-8"
            src="https://lh3.googleusercontent.com/a/ACg8ocISAMs5M83ykWWzgRMF7lT8K1nZpKmOGAnYa8bNJGywdQ=s96-c"
            alt=""
          />
          <div id="question1">{question}</div>
        </div>

        <div className="box3 py-6 bg-gray-700 flex justify-center w-full items-center">
          <div className="box overflow-hidden w-[50vw] flex justify-start space-x-5">
            <div className="w-8 h-8">
              <div className="image w-9 h-9">
                <img src="/luciferlogo.png" alt="" />
              </div>
            </div>
            <div className="flex flex-col space-y-5">
              <div id="question2" className="text-slate-400">
                {question}
              </div>
              <div id="solution" className="text-white">
                <ReactMarkdown>{answer}</ReactMarkdown> {/* Render Markdown */}
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