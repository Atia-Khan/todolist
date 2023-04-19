import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const Todo = ({todoList, onEditing, onDelete}) => {

// const [showForm, setShowForm] = useState(false);

// function onSubmit(){
//     setShowForm(true)
//  }

 

  return (
    <div className='todo-list'> 
     <ul>
      {todoList.map(todos => (
        <article className='todo-items' key={todos.id}>
        <h3>{todos.inputTitle}</h3>
        <p className="title">{todos.inputDesc}</p>
        <p className="title">{todos.inputDate}</p>
        <div className="btns">
        <button  className='edit-btn' onClick={() => onEditing(todos)}><FaEdit/></button>
        <button className='delete-btn' onClick={() => onDelete(todos.id)}><FaTrash/></button>
        </div>
        
          </article>
      ))}
     </ul>
      
    </div>
  )
}

export default Todo
