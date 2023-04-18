import React, {useState} from 'react'

const TodoForm = () => {
  const [inputTitle, setInputTitle] =useState('')
  const [inputDesc, setInputDesc] =useState('')
  const [inputDate, setInputDate] =useState()

  const handleForm = (e) =>{
e.preventDefault();

  }
  return (
    <div>
      <h4>add tofay toddo</h4>
      <div className='main-section'>
        <form className='form-section' onSunbmit={handleForm}>
          <label >Title: </label>
          <input type='text' 
          className='titletext'
           id='title'
           name='Title'
           value={title}
           onChange={e => setInputTitle(e.target.value)}
/>

<label >Description: </label>
          <input type='text' 
          className='titletext'
           id='desc'
           name='Desc'
           value={desc}
           onChange={e => setInputDesc(e.target.value)}
/>

<label >Date: </label>
          <input type='date' 
          className='titletext'
           id='date'
           name='date'
           value={date}
           onChange={e => setInputDate(e.target.value)}
/>

        </form>

      </div>
    </div>
  )
}

export default TodoForm
