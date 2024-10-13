import React from 'react'
import { Link } from 'react-router-dom'

export default function Left() {
  return (
    <>
    <div className="left h-[100vh]  overflow-hidden bg-gray-500 w-2/12">
            <Link
              id="newchat"
              to="/"
              className="w-[90%] py-2 m-2 px-9  space-x-2 border-white border rounded-md flex mx-4 justify-start items-center hover:opacity-70"
            >
              <div className=" ">New Chat</div>
              <div className="-left-5 pl-10 "></div>
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
            <div className="chats flex flex-col justify-center items-center space-y-2">
              nothing
              <div className="chat space-x-2  opacity-80 w-[85%] px-5 py-2 rounded-md bg-gray-600 cursor-pointer flex justify-start items-center">
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
                <div className="truncate">example</div>
              </div>
              end
            </div>
          </div>
    </>
  )
}
