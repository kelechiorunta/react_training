export default function Todo({ ...props }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 2,
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 4,
        border: "1px solid rgba(0,0,0,0.5)",
        boxShadow: "2px 2px 2px -2px rgba(0,0,0,0.5)",
      }}
    >
      <p>{props.id}</p>
      <p>{props.text}</p>

      <label htmlFor="completed" style={{ display: "inline-flex", gap: 4 }}>
        <input
          checked={props.done}
          type="checkbox"
          name="completed"
          id="completed"
          // onChange={}
        />
        Completed
      </label>

      <button onClick={() => props.handleDelete(props.id)}> Delete Task</button>
    </div>
  );
}
