import React, { useCallback, useEffect, useRef, useState } from "react";

export default function CountRef() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "Tega", role: "developer" });

  const countRef = useRef(0);

  const [inputValue, setInputValue] = useState("");
  const handleCount = useCallback(() => {
    setCount(count + 1);
  }, []);

  useEffect(() => {
    setUser((prevUser) => ({ ...prevUser, name: "Tochi" }));
    // const countId = setInterval(() => {
    // countRef.current = countRef.current + 1;
    // }, 1000);
    // return () => clearInterval(countId);
  }, []);

  // let x=0;
  const handleCounter = () => {
    // x = x + 1;
    countRef.current = countRef.current + 1;
    setCount((prevCount) => prevCount + 1);
    console.log("CountRef", countRef.current);
  };

  return (
    <>
      <p>Type in the input field:</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render countRef: {count}</h1>
      <button onClick={handleCounter}>Add Count</button>
    </>
  );
}
