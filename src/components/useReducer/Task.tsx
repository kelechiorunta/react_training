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
    e.preventDefault();
    idRef.current = tasks[tasks.length - 1].id as number;
    try {
      dispatch({
        type: "ADD_TASK",
        id: idRef.current,
        text: inputTask.text,
        done: false,
      });
    } catch (err) {
      console.error(err instanceof Error ? err.message : err);
    }
  };

  const handleDelete = (id: number) => {
    try {
      dispatch({ type: "REMOVE_TASK", id: id });
    } catch (error) {
      console.error(error instanceof Error ? error.message : error);
    }
  };

  const handleUpdate = (id: number) => {
    try {
      dispatch({ type: "UPDATE_TASK", id: id, text: inputTask.text });
      console.log("Tasks", tasks);
    } catch (error) {
      console.error(error instanceof Error ? error.message : error);
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
            placeholder="Enter Task Title"
            onChange={handleChange}
          />
          <input type="submit" value={"Add Task"} />
        </form>
      </fieldset>
      <table
        border={1}
        style={{
          borderCollapse: "collapse",
          width: "100%",
          border: "1px solid black",
          padding: 4,
          boxShadow: "2px 2px 2px -2px rgba(0,0,0,0.5)",
        }}
      >
        <tr>
          <th>ID</th>
          <th>Text</th>
          <th>Done</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
        {tasks.map((task, index) => (
          <Todo
            key={index}
            id={task.id}
            text={task.text}
            done={task.done}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))}
      </table>
    </div>
  );
}
