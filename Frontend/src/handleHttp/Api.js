const getall = async () => {
  try {
    const res = await fetch("http://localhost:5002/todo/");
    const resData = await res.json();
    // setTasks(resData);
    return resData;
  } catch (error) {
    console.error("Error fetching events:", error);
  }
};

const getSingleEvent = async (id) => {
  try {
    const response = await fetch(`http://localhost:5002/todo/${id}`);
    if (!response.ok) {
      throw new Error(
        `Error fetching event with id ${id}: ${response.statusText}`
      );
    }
    const eventData = await response.json();
    return eventData;
  } catch (error) {
    console.error("Error fetching task:", error);
  }
};

const addEvent = async (isEvent, setIsEvent) => {
  try {
    const res = await fetch("http://localhost:5002/todo/new", {
      method: "POST",
      body: JSON.stringify(isEvent),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      setIsEvent(isEvent);
    } else {
      console.error("Failed to add event.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

const updateEvent = async (isEvent, setIsEvent) => {
  try {
    const res = await fetch("http://localhost:5002/todo/update", {
      method: "PUT",
      body: JSON.stringify(isEvent),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIsEvent(isEvent);
    return;
  } catch (err) {
    console.log("Error:", err);
  }
};
const deleteEvent = async (id, setIsEvent) => {
  try {
    const res = await fetch("http://localhost:5002/todo/delete", {
      method: "DELETE",
      body: JSON.stringify({ id: id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      setIsEvent((prev) => {
        return prev.filter((obj) => obj._id !== id);
      });
    }
  } catch (err) {
    console.log("Error:", err);
  }
};

export { getall, getSingleEvent, addEvent, updateEvent, deleteEvent };
