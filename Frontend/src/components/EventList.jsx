import React, { useEffect, useState } from "react";
import Event from "./Event.jsx";
import { getall } from "../handleHttp/Api.js";

const EventList = () => {
  const [allEvent, setAllEvent] = useState([]);
  const [filteredEvent, setFilteredEvent] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    async function fetchData() {
      const events = await getall();
      setAllEvent(events);
      setFilteredEvent(events);
    }
    fetchData();
  }, []);

  useEffect(() => {
    filterEvent();
  }, [filter, allEvent]);

  const filterEvent = () => {
    if (filter === "all") {
      setFilteredEvent(allEvent);
    } else {
      const filtered = allEvent.filter((event) => event.status === filter);
      setFilteredEvent(filtered);
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-gray-200 rounded-lg shadow-lg dark:bg-gray-800 mb-8">
      <div className="flex mb-4">
        <div className="flex items-center">
          <label className="text-lg font-medium text-gray-700 mr-2 dark:text-gray-200">
            Filter:
          </label>
          <select
            className="border rounded p-2 dark:bg-gray-700 dark:text-gray-200"
            value={filter}
            onChange={handleFilterChange}
            aria-label="Filter events by status"
          >
            <option value="all">All</option>
            <option value="Past">Past</option>
            <option value="Up Coming">Up Coming</option>
          </select>
        </div>
      </div>
      <div className="overflow-auto">
        <ul role="list" aria-label="List of events">
          {filteredEvent.map((event) => (
            <Event
              key={event._id}
              isEvent={event}
              setIsEvent={setFilteredEvent}
              id={event._id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventList;
