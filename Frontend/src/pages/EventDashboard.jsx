import React, { useState, useEffect } from "react";
import EventSummaryCard from "../components/EventSummaryCard";
import { getall } from "../handleHttp/Api";

const EventDashboard = () => {
  const [allEvent, setAllEvent] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const events = await getall();
        setAllEvent(events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    filterEvent();
  }, [allEvent]);

  const filterEvent = () => {
    const filteredPast = allEvent.filter((event) => event.status === "Past");
    setPastEvents(filteredPast);
    const filteredUpcoming = allEvent.filter(
      (event) => event.status === "Up Coming"
    );
    setUpcomingEvents(filteredUpcoming);
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg mb-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
        Event Dashboard
      </h1>
      <section aria-labelledby="upcoming-events" className="mb-8">
        <h2
          id="upcoming-events"
          className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4"
        >
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event) => (
              <EventSummaryCard key={event._id} event={event} />
            ))
          ) : (
            <p className="text-gray-600 dark:text-gray-400">
              No upcoming events found.
            </p>
          )}
        </div>
      </section>
      <section aria-labelledby="past-events">
        <h2
          id="past-events"
          className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4"
        >
          Past Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pastEvents.length > 0 ? (
            pastEvents.map((event) => (
              <EventSummaryCard key={event._id} event={event} />
            ))
          ) : (
            <p className="text-gray-600 dark:text-gray-400">
              No past events found.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default EventDashboard;
