import React from "react";
import plusImg from "../../assets/plus.png";

const Navbar = () => {
  return (
    <div className="bg-[#FFFFFF] mb-[4rem]">
      <div className="navbar w-[95%] sm:w-[90%] mx-auto shadow-y-sm py-2 overflow-visible">
        <div className="flex-1">
          <a className="btn btn-ghost text-lg sm:text-xl normal-case">
            CS-Ticket System
          </a>
        </div>

        <div className="flex gap-3 items-center">
          <div className="hidden md:flex gap-4 justify-center items-center text-sm md:text-base">
            <a className="ButtonHover" href="">
              Home
            </a>
            <a className="ButtonHover" href="">FAQ</a>
            <a className="ButtonHover" href="">Changelog</a>
            <a className="ButtonHover" href="">Blog</a>
            <a className="ButtonHover" href="">Download</a>
            <a className="ButtonHover" href="">Contact</a>
          </div>

          <button
            className="flex gap-2 items-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-3 py-2 rounded-md text-white"
            aria-label="Create new ticket"
          >
            <img src={plusImg} alt="Plus Icon" className="h-4 w-4" />
            <span className="hidden sm:inline">New Ticket</span>
          </button>

          <div className="dropdown dropdown-end md:hidden">
            <button
              tabIndex={0}
              className="btn btn-square btn-ghost"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-2 z-50 p-2 shadow rounded-box w-48 bg-white"
            >
              <li>
                <a className="ButtonHover" href="">Home</a>
              </li>
              <li>
                <a className="ButtonHover" href="">FAQ</a>
              </li>
              <li>
                <a className="ButtonHover" href="">Changelog</a>
              </li>
              <li>
                <a className="ButtonHover" href="">Blog</a>
              </li>
              <li>
                <a className="ButtonHover" href="">Download</a>
              </li>
              <li>
                <a className="ButtonHover" href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
