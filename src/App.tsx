// import { useState } from 'react'

import "./App.css";
// import Task from "./components/zekeri/useEffect/Task";
// import Students from "./components/zekeri/useState/Task1";
// import ClassTimerComponent from "./components/zekeri/useEffect/ClassTimerComponent";
// import FunctionalTimerComponent from "./components/FunctionalTimerComponent";
import Task from "./components/tega/useEffect/Task";

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

      <br />
      {/* <Students /> */}
        <Task />
    </>
  );
}

export default App;
