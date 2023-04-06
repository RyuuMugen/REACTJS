import React, { useState } from "react";
import styles from "./style.module.css";

function App() {
  const [time, setTime] = useState("day");

  const handleNightClick = () => {
    setTime("night");
  };

  const handleDayClick = () => {
    setTime("day");
  };

  return (
    <div>
      <button onClick={handleNightClick}>Night</button>
      <button onClick={handleDayClick}>Day</button>
      <div className={`${styles.box} ${styles[time]}`}></div>
    </div>
  );
}

export default App;