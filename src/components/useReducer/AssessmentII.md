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
 It updates state through dispatched action objects in event handlers. It is commonly used when dealing with related complex state logic that can be handled by a reducer function.

2. What are the two parameters accepted by useReducer?
  a reducer function and an initial state

Write and explain the syntax below:
The syntax is the declaration of a useReducer hook that takes a reducer and an initial state as parameters to return an array destructuring of state and dispatch function .

const [state, dispatch] = useReducer(reducer, initialState); 3. What is the purpose of the dispatch function?
The dispatch function is meant to dispatch action objects to the reducer as arguments that will contain user's information on the actions to be carried out to update state.

Explain how dispatch() works in updating state.
You pass in an action object as parameter that will send the information on how to update state based on the type property of the action object.

4. What is an action object?
  This is an object with a type property that describes actions to be carried out to update state in the reducer. It is an argument passed to the dispatch function.

Describe the structure of a typical action object in React reducers.
This is an object with a type property that describes the action to be carried out. It is usually of a string data type.
Example:

{
type: 'increment'
} 5. Difference Between useState and useReducer
They are both used to handle complex state logic only that useState updates the state using setter functions useReducer updates state using dispatch functions.

Explain one major difference between useState and useReducer.
useState updates the state using setter functions while useReducer updates state using dispatch functions.
s
