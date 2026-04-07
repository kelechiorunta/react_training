import { useEffect, useEffectEvent, useState } from "react";

export default function OptimizedTimerComponent() {
  const [count, setCount] = useState(0);

  // creates an eventEffect object that handles the non-reactive logic part to be
  // used only in useEffect hook and not in rendering
  const onTick = useEffectEvent(() => {
    setCount(count + 1);
  });

  // pass the eventEffect onTick(the non-reactive part for the useEffect)
  // to the rest of the reactive part/logic of
  // a useEffect hook without passing dependencies.
  // This will prevent multiple re-renders which can affect performance
  useEffect(() => {
    const interval = setInterval(onTick, 1000);
    console.log("interval", interval);
    return () => clearInterval(interval);
  }, []);

  return <div>Count is {count}</div>;
}
