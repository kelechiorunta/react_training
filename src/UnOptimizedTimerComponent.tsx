import {  useEffect, useState, memo } from "react";

export default memo(function UnOptimizedTimerComponent() {
  const [count, setCount] = useState(0);

  

  // By passing state to the the handleTick function, unlike the effectEvent object
  // you would need to pass it to the list of dependencies.
  // This will lead to performance issues because for every render, React sees a
  // new or different function or object as dependency due to reference inequality
  // of functions and objects, and so it keeps seeing changes in the dependencies
  // and will keep re-rendering with the effect hook.
  // Also, due to change in the count variable, the use of useCallback hook with the memo
  // does little or nothing to cache in on the function for performance optimization.
  useEffect(() => {
    const handleTick = () => {
      setCount(count + 1);
    };
    const interval = setInterval(handleTick, 1000);
    console.log("interval", interval);
    return () => clearInterval(interval);
  }, [count]);

  return <div>Count is {count}</div>;
});
