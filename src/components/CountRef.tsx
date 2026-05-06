import React, { useCallback, useEffect, useRef, useState } from "react";

//Caveats
// By using a ref, you ensure that:

// 1. You can store information between re-renders (unlike regular local variables, which reset on every render).
// 2. Changing it does not trigger a re-render (unlike state variables, which trigger a re-render).

//Note:
//Changing a ref does not trigger a re-render,
//so refs are not appropriate for storing information
//you want to display on the screen.
//Use state for that instead.
export default function CountRef() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "Tega", role: "developer" });

  const countRef = useRef(0);

  const [inputValue, setInputValue] = useState("");
  const handleCount = useCallback(() => {
    setCount(count + 1);
  }, []);

  useEffect(() => {
    // setUser((prevUser) => ({ ...prevUser, name: "Tochi" }));
    // const countId = setInterval(() => {
    // countRef.current = countRef.current + 1;
    // }, 1000);
    // return () => clearInterval(countId);
  }, []);

  // let x=0;
  const handleCounter = () => {
    // x = x + 1;
    countRef.current = countRef.current + 1;
    // setCount((prevCount) => prevCount + 1);
    alert(`CountRef is ${countRef.current}`);
  };

  return (
    <>
      <p>Type in the input field:</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render countRef: {countRef.current}</h1>
      <button onClick={handleCounter}>Add Count</button>
    </>
  );
}
