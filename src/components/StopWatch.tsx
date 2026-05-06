import React, { useRef, useState } from "react";

// Here is an illustration on how useRef can be used to monitor and track timerIds for start and stop operations
export default function StopWatch() {
  const timerIdRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [time, setTime] = useState(0);

  const startTimer = () => {
    if (timerIdRef.current) {
      clearInterval(timerIdRef.current);
    }
    const intervalId = setInterval(() => {
      setTime((prev) => prev + Date.now());
    });
    timerIdRef.current = intervalId;
  };
  const stopTimer = () => {
    if (timerIdRef.current) {
      const id = timerIdRef.current;
      clearInterval(id);
    }
  };
  return (
    <div>
      <p>{time}</p>
      <button onClick={startTimer}> Start Timer</button>
      <button onClick={stopTimer}> Stop Timer</button>
    </div>
  );
}
