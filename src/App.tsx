// import { useState } from 'react'

import "./App.css";
// import NormalizedStateComponent from "./components/NormalizedStateComponent";
// import TaskOne from "./components/zekeri/useEffect/TaskOne";
// import TaskOneA from "./components/zekeri/useEffect/TaskOneA";
// import Task from "./components/zekeri/useEffect/Task";
// import Students from "./components/zekeri/useState/Task1";
// import ClassTimerComponent from "./components/zekeri/useEffect/ClassTimerComponent";
import FunctionalTimerComponent from "./components/FunctionalTimerComponent";
// import MouseTracker from "./components/tega/useEffect/TaskTwo";
// import FunctionalTimerComponent from "./components/FunctionalTimerComponent";
// import OptimizedTimerComponent from "./components/OptimizedTimerComponent";
// import UnOptimizedTimerComponent from "./UnOptimizedTimerComponent";
// import TaskTwo from "./components/zekeri/useEffect/TaskTwo";
import Counter from "./components/tega/useEffect/Counter";
import { useCallback, useMemo, useState } from "react";
import Payment from "./components/tega/useMemo/Payment";

function App() {
  // const [count, setCount] = useState(0)
  const [counter, setCounter] = useState(0)
  const [payment, setPayment] = useState(0)

  const handleCount = useCallback(() => {
    setCounter( counter + 1)
    console.log("Child rendered")
  }, [counter])

  const handlePayment = () =>{
    setPayment(c => c + 1000)
  }

  const memoizedPayment = useMemo(()=>payment, [payment])

  return (
    <>
    {/* <h1>{counter}</h1> */}
    {/* <Counter handleCount={handleCount}/> */}
    <Payment payment={memoizedPayment} />
    <button onClick={handlePayment}>Add payment</button>
      {/* <section id="center">
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks">{ count}</div> */}
      {/* <ClassTimerComponent>
        <h3>ClassTimerComponent</h3>
      </ClassTimerComponent> */}
      {/* <FunctionalTimerComponent /> */}
      {/* <MouseTracker /> */}
      {/* <OptimizedTimerComponent />
      <UnOptimizedTimerComponent /> */}
      {/* <TaskTwo /> */}

      {/* <NormalizedStateComponent /> */}

      {/* <br /> */}
      {/* <Students /> */}

      {/* <TaskOneA /> */}
    </>
  );
}

export default App;
