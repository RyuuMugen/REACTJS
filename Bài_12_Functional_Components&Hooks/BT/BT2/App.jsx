import React, { useState, useEffect } from "react";

function ShowTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date());
    }, 1000);
    return () => clearTimeout(timer);
  }, [time]);

  return (
    <div>
      <h2>Thời gian hiện tại là: {time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default ShowTime;
