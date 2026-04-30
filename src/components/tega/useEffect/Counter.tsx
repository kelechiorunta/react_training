import { useEffect, useState } from "react";

export type CounterType =  {
    handleCount: () => void;
}

export default function Counter({handleCount}: CounterType) {


  return (
    <div><button onClick={handleCount}>Increment Counter</button></div>
  )
}
