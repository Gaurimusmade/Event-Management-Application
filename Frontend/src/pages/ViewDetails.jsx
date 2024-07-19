import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleEvent } from "../handleHttp/Api";

const ViewDetails = () => {
  const [isEvent, setIsEvent] = useState({
    title: "",
    description: "",
    status: "Up Coming",
    date: "",
    time: "",
    location: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { eventId } = useParams();

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const event = await getSingleEvent(eventId);
        setIsEvent(event);
      } catch (error) {
        setError("Error fetching event details.");
        console.error("Error fetching event:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  if (loading) {
    return (
      <div className="container mx-auto mt-8 p-8 bg-gray-200 rounded-lg shadow-lg dark:bg-gray-800">
        <p className="text-lg text-gray-900 dark:text-gray-200">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto mt-8 p-8 bg-gray-200 rounded-lg shadow-lg dark:bg-gray-800">
        <p className="text-lg text-red-600 dark:text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-8 p-8 bg-gray-200 rounded-lg shadow-lg dark:bg-gray-800">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
        Event Details
      </h1>
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700 dark:text-gray-200">
          Title:
        </label>
        <p className="text-gray-900 dark:text-gray-200">{isEvent.title}</p>
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700 dark:text-gray-200">
          Status:
        </label>
        <p
          className={`text-lg ${
            isEvent.status === "Up Coming" ? "text-green-600" : "text-red-600"
          }`}
        >
          {isEvent.status}
        </p>
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700 dark:text-gray-200">
          Description:
        </label>
        <p className="text-gray-900 dark:text-gray-200">
          {isEvent.description}
        </p>
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700 dark:text-gray-200">
          Location:
        </label>
        <p className="text-gray-900 dark:text-gray-200">{isEvent.location}</p>
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700 dark:text-gray-200">
          Date:
        </label>
        <p className="text-gray-900 dark:text-gray-200">{isEvent.date}</p>
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700 dark:text-gray-200">
          Time:
        </label>
        <p className="text-gray-900 dark:text-gray-200">{isEvent.time}</p>
      </div>
    </div>
  );
};

export default ViewDetails;
