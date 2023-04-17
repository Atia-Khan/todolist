import React, { useState } from 'react'

const TodoForm = (addTodo) => {

    const [value, setTodo] =useState('');
    const [listDate, setdec] = useState('');
    const [printlist, setprintlist] = useState('');
    

    function addTodoSubmit(event){
        event.preventDefault();

    setprintlist(`Hello ${value} ${listDate}!`);
    // setFirstName('');
    // setLastName('');
  console.log(value);
        if(value){
            addTodo(value)

            setValue('');

        }
        

    }
  return (
    <div>
        <form onSubmit ={addTodoSubmit}>
      Todo: <input type='text' placeholder='Your List to save' todo={value} onChange={(event)=> setTodo(event.target.todo)} /> 
      Detail: <input type='detail' placeholder='Details' detail={value} onChange={(event)=> setdec(event.target.detail)} /> 
      Date: <input type='date' date={listDate} onChange = {(event) => setListDate(event.target.date)} />

      <button type = 'submit' >Add Todo</button>
      </form>
      <p>{printlist}</p>
    </div>
  )
}

export default TodoForm
