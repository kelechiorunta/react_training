import {
  // useEffect,
  // useEffectEvent,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

export type SubscriptionType = {
  socketServerRef: ReturnType<typeof useRef<WebSocket>>;
  chats: ReturnType<typeof useState<{ message: string; from: string }[]>>[0];
  setChats: Dispatch<SetStateAction<object>>;
  handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formdata: { message: string };
};
export default function Subscription({
  chats,
  handleSubmit,
  handleChange,
  formdata,
}: SubscriptionType) {
  return (
    <div>
      <h2>Subscription Chat</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="message"
          value={formdata.message}
          onChange={handleChange}
        />
        <input type="submit" value={"Submit"} />
      </form>

      <section style={{ padding: 4 }}>
        {chats?.map((chat) => (
          <p
            style={
              chat.from === "server"
                ? { justifySelf: "left" }
                : { justifySelf: "right" }
            }
          >
            {chat.message}
          </p>
        ))}
      </section>
    </div>
  );
}
