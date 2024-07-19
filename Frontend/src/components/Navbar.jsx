import logo from "../assets/logo.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="bg-white shadow-md dark:bg-gray-800"
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-semibold text-gray-800 ml-4 mt-2 dark:text-gray-200">
            Event Management Application
          </span>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-800 hover:underline mt-2 dark:text-gray-300 dark:hover:text-white"
          >
            Dashboard
          </Link>
          <Link
            to="/event/create"
            className="text-gray-600 hover:text-gray-800 hover:underline mt-2 dark:text-gray-300 dark:hover:text-white"
          >
            Create New Event
          </Link>
          <Link
            to="/eventlist"
            className="text-gray-600 hover:text-gray-800 hover:underline mt-2 dark:text-gray-300 dark:hover:text-white"
          >
            Event List
          </Link>
          <ThemeToggle />
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-gray-300 dark:hover:text-white"
            id="nav-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="nav-content">
          <ul className="flex flex-col space-y-4 mt-2 ml-4 mb-4" role="list">
            <li>
              <Link
                to="/"
                className="block text-gray-600 hover:text-gray-800 hover:underline dark:text-gray-300 dark:hover:text-white"
                aria-label="Navigate to Dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/event/create"
                className="block text-gray-600 hover:text-gray-800 hover:underline dark:text-gray-300 dark:hover:text-white"
                aria-label="Navigate to Create New Event"
              >
                Create New Event
              </Link>
            </li>
            <li>
              <Link
                to="/eventlist"
                className="block text-gray-600 hover:text-gray-800 hover:underline dark:text-gray-300 dark:hover:text-white"
                aria-label="Navigate to Event List"
              >
                Event List
              </Link>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
