import React from "react";
import { Link } from "react-router-dom";

const EventSummaryCard = ({ event }) => {
  return (
    <div
      className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 m-2"
      role="article"
      aria-labelledby={`event-title-${event._id}`}
      aria-describedby={`event-description-${event._id}`}
    >
      <h2
        id={`event-title-${event._id}`}
        className="text-xl font-bold text-gray-800 dark:text-gray-200"
      >
        {event.title}
      </h2>
      <p
        id={`event-date-location-${event._id}`}
        className="text-gray-600 dark:text-gray-400"
      >
        {event.date} ({event.location})
      </p>
      <p
        id={`event-description-${event._id}`}
        className="text-gray-700 dark:text-gray-300 mt-2"
      >
        {event.description}
      </p>
      <Link
        to={`/view/${event._id}`}
        className="inline-block mt-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label={`View more details about ${event.title}`}
      >
        View More Details
      </Link>
    </div>
  );
};

export default EventSummaryCard;
