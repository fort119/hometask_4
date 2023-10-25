export const AddTodoAction = (todo) => (dispatch) => {
    dispatch({
      type: "ADD_TASK",
      payload: todo,
    });
  };
  
  export const RemoveTodoAction = (todo) => (dispatch, getState) => {
    const {
      Todo: { todos },
    } = getState();
  
    dispatch({
      type: "REMOVE_TASK",
      payload: todos.filter((t) => todo !== t),
    });
  };
  