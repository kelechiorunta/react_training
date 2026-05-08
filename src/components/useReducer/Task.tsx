import React, { useReducer, useRef, useState } from "react";
import taskReducer, { type task } from "./taskReducer";
import Todo from "./Todo";
import "./task.css";

export default function Task() {
  const initialState: task[] = [{ id: 0, text: "First task", done: false }];
  const [tasks, dispatch] = useReducer(taskReducer, initialState);
  const [inputTask, setInputTask] = useState<task>({
    id: 0,
    text: "",
    done: false,
  });
  const idRef = useRef<number>(0);

  const handleAddTask = (e: React.SubmitEvent<HTMLFormElement>) => {
    // idRef.current = inputTask.id;
    e.preventDefault();
    try {
      dispatch({
        type: "ADD_TASK",
        id: idRef.current++,
        text: inputTask.text,
        done: false,
      });
    } catch (err) {
      console.error(err instanceof Error ? err.message : err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTask((prev) => ({ ...prev, text: e.target.value }));
  };
  return (
    <div className="task">
      <fieldset>
        <legend>Please Fill Task Details</legend>
        <form onSubmit={handleAddTask}>
          <input
            type="text"
            value={inputTask.text}
            name="text"
            placeholder="Enter Task"
            onChange={handleChange}
          />
          <input type="submit" value={"Add Task"} />
        </form>
      </fieldset>
      <ul>
        {tasks.map((task, index) => (
          <Todo key={index} id={task.id} text={task.text} done={task.done} />
        ))}
      </ul>
    </div>
  );
}
