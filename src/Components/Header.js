import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import Image from "../Images/logo.webp";

export default function Header({ darkMode, toggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`top-0 z-30 w-full px-2 py-4 bg-black shadow-xl shadow-black-600/20 sm:px-4`}
    >
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <span className="pl-4 text-2xl font-extrabold text-white">
          <div>
            <img
              src={Image}
              height="44"
              width="196"
              alt="Glad432"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </span>
        <button
          onClick={toggleTheme}
          className="inline-block ml-auto relative w-8 h-8 text-white hover:text-blue-700"
        >
          <FontAwesomeIcon
            icon={darkMode ? faSun : faMoon}
            className="mr-2"
            size="lg"
          />
        </button>
        <div className="flex items-center space-x-1">
          <ul className="hidden space-x-2 md:inline-flex">
            <li>
              <a
                href="https://github.com/gladw-in"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 font-semibold text-white rounded hover:text-blue-700"
              >
                Github
              </a>
            </li>
          </ul>
          <div className="inline-flex md:hidden">
            <button
              className="flex-none px-2 text-2xl text-white"
              onClick={() => setOpen(!open)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 16h16"
                />
              </svg>
              <span className="sr-only"></span>
            </button>
            {open && (
              <div className="absolute top-0 left-0 right-0 z-50 flex flex-col p-2 pb-4 m-2 space-y-3 bg-black rounded shadow">
                <button
                  className="self-end flex-none px-2 ml-2 text-2xl text-white"
                  onClick={() => setOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="sr-only"></span>
                </button>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://github.com/gladw-in"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 font-semibold text-white rounded hover:text-blue-700"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
