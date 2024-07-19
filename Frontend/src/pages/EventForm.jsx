import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleEvent, addEvent, updateEvent } from "../handleHttp/Api";

const EventForm = () => {
  const [isEvent, setIsEvent] = useState({
    title: "",
    description: "",
    status: "Up Coming",
    date: "",
    time: "",
    location: "",
  });
  const { eventId } = useParams();
  const isNewEvent = !eventId;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEventDetails = async () => {
      if (!isNewEvent) {
        try {
          const event = await getSingleEvent(eventId);
          setIsEvent(event);
        } catch (error) {
          console.error("Error fetching event:", error);
        }
      }
    };

    fetchEventDetails();
  }, [eventId, isNewEvent]);

  const handleChange = (event) => {
    setIsEvent({
      ...isEvent,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (isNewEvent) {
        await addEvent(isEvent);
        setIsEvent({
          title: "",
          description: "",
          status: "Up Coming",
          date: "",
          time: "",
          location: "",
        });
        navigate("/");
      } else {
        await updateEvent(isEvent);
        navigate("/");
      }
    } catch (error) {
      console.error("Error creating/updating event:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg mb-8">
      <form onSubmit={handleSubmit} aria-labelledby="event-form">
        <h1
          id="event-form"
          className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6"
        >
          {isNewEvent ? "Create New Event" : "Edit Event"}
        </h1>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Event Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={isEvent.title}
              onChange={handleChange}
              className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              required
              aria-required="true"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Event Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={isEvent.description}
              onChange={handleChange}
              className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              required
              aria-required="true"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="status"
              className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Event Status:
            </label>
            <select
              id="status"
              name="status"
              value={isEvent.status}
              onChange={handleChange}
              className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              required
              aria-required="true"
            >
              <option value="Past">Past</option>
              <option value="Up Coming">Up Coming</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Event Location:
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={isEvent.location}
              onChange={handleChange}
              className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              required
              aria-required="true"
            />
          </div>
          <div>
            <label
              htmlFor="date"
              className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Event Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={isEvent.date}
              onChange={handleChange}
              className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              required
              aria-required="true"
            />
          </div>
          <div>
            <label
              htmlFor="time"
              className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Event Time:
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={isEvent.time}
              onChange={handleChange}
              className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              required
              aria-required="true"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isNewEvent ? "Create Event" : "Update Event"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
