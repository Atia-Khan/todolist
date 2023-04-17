import React, { useState } from 'react'
import Nav from './Nav';
import TodoForm from './TodoForm';

const Todo = () => {

const [showForm, setShowForm] = useState(false);

function onSubmit(){
    setShowForm(true)
 }

 function addTodo(){

 }

  



  return (
    <div>
      <Nav />
      <button onClick={onSubmit}> Open Form </button>
      {showForm && <TodoForm addTodo={addTodo}/>}
     
    </div>
  )
}

export default Todo
