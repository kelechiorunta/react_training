export default function Todo({ ...props }) {
  return (
    <tr>
      <td>
        <p style={{ textAlign: "center" }}>{props.id}</p>
      </td>
      <td>
        <p style={{ textAlign: "center" }}>{props.text}</p>
      </td>
      <td>
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
      </td>
      <td>
        <button onClick={() => props.handleDelete(props.id)}>
          {" "}
          Delete Task
        </button>
      </td>
      <td>
        <button onClick={() => props.handleUpdate(props.id)}>
          {" "}
          Update Task Title
        </button>
      </td>
    </tr>
  );
}
