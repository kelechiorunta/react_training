Beginner Assessment — React useReducer Hook
Instructions
Answer all questions.
Write clean and readable code.
Focus on understanding how useReducer works.

Section A — Theory Questions

1. What is the purpose of the useReducer hook?
   The useReducer hook in React is used to manage complex state logic through dispatch actions than setter functions in functional components.
2. What are the two arguments passed into useReducer?
   State and dispatch(function used to send action)
3. What does the reducer function return?
   return the updated state object/value
4. What is an “action” in useReducer?
   an action is an object that describes what happened or what change should occur in the state.
5. When would you choose useReducer instead of useState?
   when the state logic becomes more complex or interconnected.

Section B — Fill in the Blanks

Complete the missing parts of the code.

import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
switch (action.type) {
case 'increment':
return { count: state.count + 1 };

    case 'decrement':
      return { count: state.count - 1 };

    default:
      return state;

}
}

export default function Counter() {
const [state, dispatch] = useReducer(reducer, initialState);

return (

<div>
<h1>{state.count}</h1>

      <button
        onClick={() =>
          dispatch({ type: 'increment' })
        }
      >
        +
      </button>

      <button
        onClick={() =>
          dispatch({ type: 'decrement' })
        }
      >
        -
      </button>
    </div>

);
}
Section C — Practical Coding Tasks
Task 1 — Counter Application

Build a counter using useReducer.

Requirements
Initial count should be 0
Add:
Increment button
Decrement button
Reset button
Use action types:
"increment"
"decrement"
"reset"
