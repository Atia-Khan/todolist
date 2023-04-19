import React, {useEffect, useState} from 'react'

const TodoForm = ({onSubmit, todos}) => {
  const [inputTitle, setInputTitle] =useState('')
  const [inputDesc, setInputDesc] =useState('')
  const [inputDate, setInputDate] =useState('')

  useEffect(() => {
    if(todos){
      setInputTitle(todos.inputTitle);
      setInputDesc(todos.inputDesc);
      setInputDate(todos.inputDate);

    }
  }, [todos]);

  const handleForm = (e) =>{
e.preventDefault();

if(todos) {
  onSubmit(todos.id, inputTitle, inputDesc, inputDate);
}else {
  onSubmit(null, inputTitle, inputDesc, inputDate);
}
setInputTitle('');
setInputDesc('');
setInputDate('');

  }
  return (
    <div>
      <h4>Add today's Todos</h4>
      <div className='main-section'>
        <form className='form-section' onSubmit={handleForm}>
          <label>Title: </label>
          <input type='text' 
          className='titletext'
           id='title'
           name='Title'
           value={inputTitle}
           onChange={e => setInputTitle(e.target.value)}
/>

<label >Description: </label>
          <input type='text' 
          className='titletext'
           id='desc'
           name='Desc'
           value={inputDesc}
           onChange={e => setInputDesc(e.target.value)}
/>

<label >Date: </label>
          <input type='date' 
          className='titletext'
           id='date'
           name='date'
           value={inputDate}
           onChange={e => setInputDate(e.target.value)}
/>

<button type='submit'>Submit the Form</button>

        </form>

      </div>
    </div>
  )
}

export default TodoForm;
