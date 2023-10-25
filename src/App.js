import React,{ useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./actions/TodoActions";
import "./App.css";

function App() {
  const [todoTasks, setTodo] = useState();

  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todoTasks));
  };

  const removeHandler = (task) => {
    console.log(task);
    dispatch(RemoveTodoAction(task));
  };

  function statusHandler(id){
    setTodo(todos.filter(task => {
      if(task.id===id){
        todos.done = !todos.done
      }
      return task;
    }))


  }

  return (
    <div className="App">
  
        <h2>Todo list</h2>
        <div className="symbols">
          <div className="done"><p>is not done</p></div>
          <div className="not-done"><p>done</p></div>
        </div>
        <form className='todo-form' onSubmit={handleSubmit}>
          <input placeholder="Enter a todo" onChange={(e) => setTodo(e.target.value)}/>
          <button className='add-task-btn' type="submit">Add task</button>

          <ul className="task-list">
            {todos && todos.map((task) => (
                
                <li key={task} className='tasks-item' onClick={()=>statusHandler(task.id)} style = {{backgroundColor: todos.done? 'red': null}}>
                  <h2 className='task-title'>To:</h2>
                  <p className='task-descr' >{task}</p>
                  <button className="remove-btn" type="button" onClick={() => removeHandler(task)}>remove task</button>
                </li>
                
              ))}
          </ul>

        </form>

    </div>
  );
}

export default App;
