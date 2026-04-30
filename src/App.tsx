// import { useState } from 'react'

import "./App.css";
// import Subscription from "./components/Subscription";
// import NormalizedStateComponent from "./components/NormalizedStateComponent";
// import TaskOne from "./components/zekeri/useEffect/TaskOne";
// import TaskOneA from "./components/zekeri/useEffect/TaskOneA";
// import Task from "./components/zekeri/useEffect/Task";
// import Students from "./components/zekeri/useState/Task1";
// import ClassTimerComponent from "./components/zekeri/useEffect/ClassTimerComponent";
<<<<<<< HEAD
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
=======
// import FunctionalTimerComponent from "./components/FunctionalTimerComponent";
// import MouseTracker from "./components/tega/useEffect/MouseTracker";
// import FunctionalTimerComponent from "./components/FunctionalTimerComponent";
// import OptimizedTimerComponent from "./components/OptimizedTimerComponent";
// import UnOptimizedTimerComponent from "./components/UnOptimizedTimerComponent";
// import TaskTwo from "./components/zekeri/useEffect/TaskTwo";
import {
  useRef,
  useState,
  type SetStateAction,
  type Dispatch,
  useEffectEvent,
  useEffect,
  useCallback,
} from "react";
import Footballer from "./components/Footballer";
// import CacheFunctionComponent from "./components/CacheFunctionComponent";

function App() {
  // const [count, setCount] = useState(0)
  const socketServerRef = useRef<WebSocket | null>(null);
  const sourceSSERef = useRef<EventSource | null>(null);
  const [chats, setChats] = useState<{ message: string; from: string }[]>([
    { message: "", from: "server" },
  ]);
  const [digit, setDigit] = useState(0);

  const onSSEConnection = useEffectEvent(() => {
    const sseSource = new EventSource("/sse/message/sse/data");
    sourceSSERef.current = sseSource;
  });

  const onWebSocketConnection = useEffectEvent(() => {
    const socket = new WebSocket("http://localhost:5174/websocket");
    socketServerRef.current = socket;
  });

  const onWSMessage = useEffectEvent((event: MessageEvent) => {
    console.log("Message From Server", event.data);
    setChats((prev: object) => [
      ...(prev as [{ message: string; from: string }]),
      { message: event.data as string, from: "server" },
    ]);
  });

  const onSSEMessage = useEffectEvent((event: MessageEvent) => {
    console.log("Message From Server", event.data);
    setChats((prev: object) => [
      ...(prev as [{ message: string; from: string }]),
      { message: event.data as string, from: "server" },
    ]);
  });

  useEffect(() => {
    onWebSocketConnection();
    onSSEConnection();
  }, []);

  useEffect(() => {
    const socket = new WebSocket("http://localhost:5174/websocket");
    socket.onmessage = (event: MessageEvent) => {
      onWSMessage(event);
      socket.send("Hi from Client");
    };

    return () => socket.close();
  }, []);

  // useEffect(() => {
  //   const socket = new EventSource("/sse/message/sse/data");
  //   socket.onmessage = (event: MessageEvent) => {
  //     onSSEMessage(event);
  //     // socket.send("Hi from Client");
  //   };

  //   return () => socket.close();
  // }, []);
  useEffect(() => {
    if (sourceSSERef.current) {
      sourceSSERef.current.onmessage = onSSEMessage;
    }
    return () => sourceSSERef.current?.close();
  }, []);

  const handleAdd = () => {
    socketServerRef.current?.send("Thank you");
    setChats((prev: object) => [
      ...(prev as [{ message: string; from: string }]),
      { message: "Thank you", from: "client" },
    ]);
    setDigit((d) => d + 1);
  };

  const [formdata, setFormData] = useState({ message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setChats((prev: object) => [
      ...(prev as [{ message: string; from: string }]),
      { message: formdata.message, from: "client" },
    ]);
  };

  const [footballer, setFootballer] = useState<{ name: string }>({ name: "" });
  const [footballers, setFootballers] = useState<{ name: string }[]>([]);

  const handleAddFootballer = () => {
    console.log(footballers);
  };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = e.target;
  //   setFootballer((prev) => ({...prev, name: value}))
  // }

  return (
    <>
      <input
        name="footballer"
        value={footballer.name}
        onChange={(e) =>
          setFootballer((prev) => ({ ...prev, name: e.target.value }))
        }
      ></input>
      <Footballer
        footballers={footballers}
        handleAddFootballer={handleAddFootballer}
      />
>>>>>>> main
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
<<<<<<< HEAD
      {/* <OptimizedTimerComponent />
      <UnOptimizedTimerComponent /> */}
      {/* <TaskTwo /> */}
=======
      {/* <OptimizedTimerComponent /> */}
      {/* <UnOptimizedTimerComponent /> */}
      {/* <TaskTwo /> */}
      {/* <Subscription
        handleChange={
          handleChange as (e: React.ChangeEvent<HTMLInputElement>) => {}
        }
        handleSubmit={
          handleSubmit as (e: React.SubmitEvent<HTMLFormElement>) => {}
        }
        formdata={formdata as { message: string }}
        socketServerRef={
          socketServerRef as ReturnType<typeof useRef<WebSocket>>
        }
        chats={
          chats as ReturnType<
            typeof useState<{ message: string; from: string }[]>
          >[0]
        }
        setChats={setChats as Dispatch<SetStateAction<object>>}
      />
      <CacheFunctionComponent
        digit={digit as number}
        handleAdd={handleAdd as () => void}
      /> */}
>>>>>>> main

      {/* <NormalizedStateComponent /> */}

      {/* <br /> */}
      {/* <Students /> */}

      {/* <TaskOneA /> */}
    </>
  );
}

export default App;
