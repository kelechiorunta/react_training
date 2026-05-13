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
   It is a hook used to manage complex state logic through dispatch functions
   Explain what the useReducer hook does and when it is commonly used.
   When dealing with complex state logic.

2. What are the two parameters accepted by useReducer?
  a reducer function and an initial state

Write and explain the syntax below:

const [state, dispatch] = useReducer(reducer, initialState); 3. What is the purpose of the dispatch function?
This tells us what function is assigned and going to be updated using the dispatch functions instead of the setter function.

Explain how dispatch() works in updating state.
You give it a payload case in which it will update based on.

4. What is an action object?
   This specifies an action based from the object of tasks that is supposed to be carried out

Describe the structure of a typical action object in React reducers.
This is an object with strings thsat determine the action of what is being carried out.
Example:

{
type: 'increment'
} 5. Difference Between useState and useReducer
They are both used to handle complex state logic only that useState updates the state using setter functions useReducer updates state using dispatch functions.

Explain one major difference between useState and useReducer.
useState updates the state using setter functions while useReducer updates state using dispatch functions.
s
