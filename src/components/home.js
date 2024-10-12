import React from 'react'

export default function Home() {
  return (
    <>
    <div className="right1 h-[100vh] bg-black w-10/12 flex content-center justify-center items-center flex-col">
            <div className="text-center text-slate-400 w-full text-3xl mt-16 mb-10 font-bold">
              LUCIFER AI
            </div>
            <div className="itemsrow flex flex-row items-center justify-center  py-4 w-[43vw]  ">
              <div className="examples flex flex-col justify-center items-center">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-6 w-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
                <div className="py-4">Examples</div>
                <button className="bg-gray-600 w-[13vw] text-sm hover:bg-gray-700 py-4 px-4 mx-4  my-2 rounded-md">
                  "Explain quantum computing in simple terms"{" "}
                </button>
                <button className="bg-gray-600 w-[13vw] text-sm hover:bg-gray-700 py-4 px-4 mx-4  my-2 rounded-md">
                  "Got any creative ideas for a 10 year old’s birthday?"{" "}
                </button>
                <button className="bg-gray-600 w-[13vw] text-sm hover:bg-gray-700 py-4 px-4 mx-4  my-2 rounded-md">
                  "How do I make an HTTP request in Javascript?"{" "}
                </button>
              </div>
              <div className="cap flex flex-col justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  ></path>
                </svg>
                <div className="py-4">Capabilities</div>
                <button className="bg-gray-600 w-[13vw] text-sm hover:bg-gray-700 py-4 px-4 mx-4  my-2 rounded-md">
                  Remembers what user said earlier in the conversation
                </button>
                <button className="bg-gray-600 w-[13vw] text-sm hover:bg-gray-700 py-4 px-4 mx-4  my-2 rounded-md">
                  Allows user to provide follow-up corrections
                </button>
                <button className="bg-gray-600 w-[13vw] text-sm hover:bg-gray-700 py-4 px-4 mx-4  my-2 rounded-md">
                  Trained to decline inappropriate requests
                </button>
              </div>
              <div className="lim flex flex-col justify-center items-center">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-6 w-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <div className="py-4">Limitations</div>
                <button
                  id="hee"
                  className="bg-gray-600 w-[13vw] text-sm hover:bg-gray-700 py-4 px-4 mx-4  my-2 rounded-md"
                >
                  {" "}
                  May occasionally generate incorrect information
                </button>
                <button className="bg-gray-600 w-[13vw] text-sm hover:bg-gray-700 py-4 px-4 mx-4  my-2 rounded-md">
                  May occasionally produce harmful instructions or biased
                  content
                </button>
                <button className="bg-gray-600 w-[13vw] text-sm hover:bg-gray-700 py-4 px-4 mx-4  my-2 rounded-md">
                  Limited knowledge of world and events after 2023
                </button>
              </div>
            </div>
            <div id="errorMessage"></div>

            <div className="input w-full text-center my-6 flex items-center justify-center flex-col">
              <div className="buttonsvg pl-16 w-[50vw] flex">
                <input
                  className="w-full p-4 bg-gray-600 rounded-md"
                  placeholder="Send a Message"
                  type="text"
                  name="text"
                  id="questionInput"
                />

                <button id="sendButton" className="relative -left-20 pl-10">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
            </div>
            <div className="text-xs py-2 pr-10 text-center opacity-70">
              Free Research Preview. LUCIFER AI may produce inaccurate
              information about people, places, or facts.
              <a
                className="underline"
                href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
              >
                {" "}
                updated on ChatGPT Mar 23 Version
              </a>
            </div>
          </div>
    </>
  )
}
