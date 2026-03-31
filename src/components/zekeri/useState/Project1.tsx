import { useState } from "react";

/** The useState hook is a function that lets you declare state variables in functional components. **/

//   In the state variable you have the following:

  // stateVariable - holds the current state value
  // setStateFunction - (the setter function) updates the state variable
  // initialValue - sets the initial state

  // Few reminders or tips on structuring state
  // Group related states
  // Avoid contradicting/impossible states
  // Avoid redundant states
  // Avoid duplication of states
// Avoid deeply nested states - try as best as possible to use normalized states which are flat states 

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
