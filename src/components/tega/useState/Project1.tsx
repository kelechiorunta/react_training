import { useState } from "react";

/** The useState hook is a function that lets you declare state variables in functional components. **/

export default function Project1() {
  // Here's how you can declare a state variable when you import useState:
  const initialValue = 2;
  const [stateVariable, setStateFunction] = useState(initialValue);
  return (
    <>
      <h1>Value is {stateVariable}</h1>
    </>
  );
}
