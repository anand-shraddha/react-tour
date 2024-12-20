import React, { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";

const App = () => {
  const [tours, setTours] = useState(data);
  const [removedTours, setRemovedTours] = useState([]);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);

    const t = tours.find((tour) => tour.id === id);
    setRemovedTours([...removedTours, t]);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No tours left</h2>
        <button className="btn-white" onClick={() => {
          setTours(data);
          setRemovedTours([]);
        }}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="container">
        <h2 className="title">Your Trip Planner</h2>
      </div>
      <Tours tours={tours} removeTour={removeTour}></Tours>

      <h1>Removed tours</h1>
      <Tours tours={removedTours} hideNotInterested={true}></Tours>
    </div>
  );
};

export default App;