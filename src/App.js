import Todo from "./components/Todo";
import "./App.css";
import { useCallback, useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [editTodo, setEditTodo] = useState('');
  

  const addTodos = (id,title,desc,date)=> {
    const newTodos = {
      id: Date.now(),title,desc,date
    };

    setTodoList([...todoList, newTodos]);
  }

   editTodo = todoList => {
    setEditTodo([...todoList, newTodos]);
  }
  

  
  return (
    <div>
      <Todo />
    </div>
  );

}

export default App;
