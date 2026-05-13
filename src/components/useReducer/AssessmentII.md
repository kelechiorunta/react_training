Beginner React useReducer Assessment
Objective

Practice managing complex state in React using the useReducer hook.

Learning Objectives

By the end of this assessment, students should be able to:

Understand the purpose of the useReducer hook.
Create a reducer function with different action types.
Dispatch actions to update state.
Manage multiple related state values using a single reducer.
Build a small interactive React component using useReducer.
Theory Questions
1. What is useReducer in React?

Explain what the useReducer hook does and when it is commonly used.

2. What are the two parameters accepted by useReducer?

Write and explain the syntax below:

const [state, dispatch] = useReducer(reducer, initialState);
3. What is the purpose of the dispatch function?

Explain how dispatch() works in updating state.

4. What is an action object?

Describe the structure of a typical action object in React reducers.

Example:

{
  type: 'increment'
}
5. Difference Between useState and useReducer

Explain one major difference between useState and useReducer.

Practical Assessment Tasks
Task 1 — Counter Application

Create a counter application with:

Increment button
Decrement button
Reset button

Initial state:

0

Buttons should update the counter using useReducer.

Task 2 — Theme Toggle

Create a theme switcher using useReducer.

Requirements:

Initial theme should be "light"
Add a button to toggle between:
"light"
"dark"

Display the current theme on the screen.

Task 3 — Form State Management

Create a simple form with:

Name input
Email input

Use useReducer to manage the form state.

Requirements:

Update state as the user types
Display entered values below the form
Task 4 — Todo List

Build a small todo application using useReducer.

Requirements:

Add todos
Delete todos
Display all todos

Each todo should contain:

{
  id,
  text
}
Task 5 — Shopping Cart

Create a simple shopping cart reducer.

Requirements:

Add item
Remove item
Clear cart

Display:

Number of items in cart
List of cart items
Bonus Challenge

Modify the todo app to include:

Completed tasks
Toggle complete/incomplete
Count completed tasks
Starter Boilerplate
import React, { useReducer } from 'react';

const initialState = {};

function reducer(state, action) {
  switch (action.type) {
    case '':
      return {};

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>useReducer Assessment</h1>
    </div>
  );
}

export default App;
Submission Requirements

Students should submit:

React component files
Reducer function
Screenshots of completed UI
Short explanation of how dispatch() works in their project
Assessment Goals

This assessment tests:

State management understanding
Reducer logic
Action handling
Component structure
React hook usage
