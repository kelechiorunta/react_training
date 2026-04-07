// import { useState } from 'react'

import "./App.css";
// import NormalizedStateComponent from "./components/NormalizedStateComponent";
// import TaskOne from "./components/zekeri/useEffect/TaskOne";
// import TaskOneA from "./components/zekeri/useEffect/TaskOneA";
// import Task from "./components/zekeri/useEffect/Task";
// import Students from "./components/zekeri/useState/Task1";
// import ClassTimerComponent from "./components/zekeri/useEffect/ClassTimerComponent";
// import FunctionalTimerComponent from "./components/FunctionalTimerComponent";
import OptimizedTimerComponent from "./components/OptimizedTimerComponent";
import UnOptimizedTimerComponent from "./UnOptimizedTimerComponent";
import TaskTwo from "./components/zekeri/useEffect/TaskTwo";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
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
      <OptimizedTimerComponent />
      <UnOptimizedTimerComponent />
      <TaskTwo />

      {/* <NormalizedStateComponent /> */}

      <br />
      {/* <Students /> */}

      {/* <TaskOneA /> */}
    </>
  );
}

export default App;
