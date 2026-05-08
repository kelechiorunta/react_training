Beginner Assessment — React useReducer Hook
Instructions
Answer all questions.
Write clean and readable code.
Focus on understanding how useReducer works.

Section A — Theory Questions

1. What is the purpose of the useReducer hook?
2. What are the two arguments passed into useReducer?
3. What does the reducer function return?
4. What is an “action” in useReducer?
5. When would you choose useReducer instead of useState?

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
      return _______;

}
}

export default function Counter() {
const [state, dispatch] = useReducer(**\_\_\_**, **\_\_\_**);

return (
<div>
<h1>{state.count}</h1>

      <button
        onClick={() =>
          dispatch({ type: '__________' })
        }
      >
        +
      </button>

      <button
        onClick={() =>
          dispatch({ type: '__________' })
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
