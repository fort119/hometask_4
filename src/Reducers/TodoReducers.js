export const TodoReducer = (state = { todos: [] }, action) => {
    switch (action.type) {
      case "ADD_TASK":
        return { todos: [action.payload, ...state.todos, ] };
      case "REMOVE_TASK":
        return { todos: action.payload };
  
      default:
        return state;
    }
  };