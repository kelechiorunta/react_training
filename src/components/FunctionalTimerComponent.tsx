import React, { useEffect, useState } from "react";

export default function FunctionalTimerComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setCount((c) => c + 1), 1000);
    console.log("interval", interval);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>FunctionalTimerComponent</h3>
      <p>Count is {count}</p>
    </div>
  );
}
