export interface task {
  id?: number;
  text?: string;
  done?: boolean;
}

export interface actionType {
  type: string;
  id?: number;
  text?: string;
  done?: boolean;
}

const taskReducer = (state: task[], action: actionType) => {
  switch (action.type) {
    case "ADD_TASK": {
      const newTask = {
        id: (action.id as number) + 1,
        text: action.text,
        done: action.done,
      };
      return [...state, newTask];
    }
    case "REMOVE_TASK": {
      return state.filter((task) => task.id !== action.id);
    }
    case "UPDATE_TASK": {
      return state.map((task) => {
        if (task.id === action.id) {
          return { ...task, text: action.text };
        }
        return task;
      });
    }
    default:
      throw new Error("No action defined");
  }
};

export default taskReducer;
