import { useEffect, useEffectEvent } from "react";

export default function Subscription() {
  const onMessage = useEffectEvent((event: MessageEvent) => {
    console.log("Message From Server", event.data);
  });

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3500");
    socket.onmessage = (event: MessageEvent) => {
      onMessage(event);
      socket.send("Hi from Client");
    };

    return () => socket.close();
  }, []);

  return <div>Subscription</div>;
}
