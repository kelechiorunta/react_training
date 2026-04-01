// import { useEffect, useState } from "react";

// Working with the useEffect Hook
// useEffect() Hook: In React, an effect is anything that happens outside the component rendering process.
// That is, anything React does not handle directly as part of rendering the UI.
// Common examples include fetching data, updating the browser tab's title,
// reading from or writing to the browser's local storage, getting the user's location, and much more.
// These operations interact with the outside world and are known as side effects.

// React provides the useEffect hook to let you handle those side effects.
// useEffect lets you run a function after the component renders or updates.

// By the end of this class, make an asynchronous fetch api call
// posts: https://jsonplaceholder.typicode.com/posts - Generic posts (100 items).
// using useEffect

export default function Task() {
  // useEffect(() => {
  //   // Your side effecsetStetet logic (usually a function) goes here
  // }, [dependencies]);
  // Note that dependencies can be an array of "reactive values"
  // (state, props, functions, variables, and so on), an empty array, or omitted entirely.
  // Here's how all of those options control how useEffect works:
  // If dependencies is an array that includes one or more reactive values,
  // the effect will run whenever they change.
  // If dependencies is an empty array, useEffect runs only once when the component first renders.
  // If you omit dependencies, the effect runs every time the component renders or updates. This is not a good optimization technique
  // return (<><h1>{ count}</h1></>)
}
