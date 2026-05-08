export interface task {
  id: number;
  text: string;
  done: boolean;
}

export interface actionType {
  type: string;
  id: number;
  text: string;
  done: boolean;
}

const taskReducer = (state: task[], action: actionType) => {
  switch (action.type) {
    case "ADD_TASK": {
      const newTask = {
        id: action.id + 1,
        text: action.text,
        done: action.done,
      };
      return [...state, newTask];
    }
    case "REMOVE_TASK":
      (id: number) => {
        return state.filter((task) => task.id !== id);
      };
    default:
      throw new Error("No action defined");
  }
};

export default taskReducer;
