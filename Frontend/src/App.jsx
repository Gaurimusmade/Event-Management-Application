import React from "react";
import { Routes, Route } from "react-router-dom";
import AllEvent from "./pages/AllEvent";
import EventForm from "./pages/EventForm";
import ViewDetails from "./pages/ViewDetails";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import EventDashboard from "./pages/EventDashboard";
const App = () => {
  return (
    <>
      <Navbar />
      <h1>Hello How are you?</h1>
      <h1>Hello Gauriiiiiiiiiii</h1>
      <h1>ALL GOOD</h1>
      <h1>Hello World</h1>
      <Routes>
        <Route path="/" element={<EventDashboard />} />
        <Route path="/eventlist" element={<AllEvent />} />
        <Route path="/event/:eventId" element={<EventForm />} />
        <Route path="/event/create" element={<EventForm />} />
        <Route path="/view/:eventId" element={<ViewDetails />} />
      </Routes>
      <Footer />
      <h1>Hello Gauriiiiiiiiiii from master</h1>
      <h1>Hello 1234</h1>
    </>
  );
};

export default App;
