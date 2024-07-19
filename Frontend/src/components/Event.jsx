import React from "react";
import { Link } from "react-router-dom";
import { deleteEvent } from "../handleHttp/Api";

const Event = ({ isEvent, id, setIsEvent }) => {
  const handleRemove = async () => {
    await deleteEvent(id, setIsEvent);
  };

  return (
    <li
      className="flex items-center justify-between bg-white dark:bg-gray-800 p-3 my-2 rounded shadow-md hover:shadow-lg"
      role="listitem"
    >
      <div className="flex-1 text-lg">
        <p
          className={`text-gray-800 dark:text-gray-200 font-medium ${
            isEvent.status === "Past"
              ? "line-through decoration-red-500 animation-pulse 1s ease-in-out infinite"
              : ""
          }`}
        >
          {isEvent.title}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {isEvent.date}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {isEvent.location}
        </p>
      </div>
      <div className="flex space-x-2">
        <span
          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-bold ${
            isEvent.status === "Past"
              ? "text-red-500 bg-red-100 dark:bg-red-900"
              : "text-green-500 bg-green-100 dark:bg-green-900"
          }`}
        >
          {isEvent.status}
        </span>
        <Link
          to={`/view/${id}`}
          className="text-black-500 dark:text-white hover:text-black-700 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white"
        >
          👁View
        </Link>
        <Link
          to={`/event/${id}`}
          className="text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          ✏️Edit
        </Link>
        <button
          className="text-red-500 dark:text-red-300 hover:text-red-700 dark:hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          onClick={handleRemove}
          aria-label={`Remove ${isEvent.title}`}
        >
          🗑Remove
        </button>
      </div>
    </li>
  );
};

export default Event;
