import Todo from "./components/Todo";
import "./App.css";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import Nav from './components/Nav';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  

  const addTodos = (id,inputTitle,inputDesc,inputDate)=> {
    const newTodos = {
      id: Date.now(), inputTitle,inputDesc,inputDate
    };

    setTodoList([...todoList, newTodos]);
  }

   const editTodos = todos => {
    console.log(todos)
    setEditTodo(todos);
  };

  const saveTodos = (id, inputTitle, inputDesc, inputDate) => {
    const updateTodos = todoList.map(todos => 
      todos.id === id ? {...todos, inputTitle, inputDesc, inputDate} : todos
    );
    setTodoList(updateTodos);
    setEditTodo(null);
  };

  const deleteTodos = id => {
    const filterTodos = todoList.filter(todos =>
      todos.id !== id)
      setTodoList(filterTodos);
    };


  
  

  
  return (
    <div>
      <Nav />
      {editTodo ? (<TodoForm onSubmit = {saveTodos}
      todos = {editTodo} />) : (<TodoForm onSubmit = {addTodos} />
      )}
      <Todo todoList ={todoList} onEditing={editTodos}
      onDelete={deleteTodos} />
    </div>
  );

}

export default App;
