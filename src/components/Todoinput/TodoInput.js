import React, { useContext, useState } from 'react'
import todoContext from '../../context/todo/todo-context'
import './style.css'
const TodoInput = () => {
  const [todo, setTodo] = useState('')
  const { addTodo } = useContext(todoContext)

  const onChangeHandler = (e) => {
    setTodo(e.target.value)
  }
  const onSubmitHandler = (e) => {
    e.preventDefault()
    const newTodo = {
      id: Math.random(),
      text: todo,
      complete: false,
    }
    addTodo(newTodo)
    setTodo('')
  }
  return (
    <div className='todoInput'>
      <h3 className='todoInput__title'>useContext + useReducer</h3>
      <form onSubmit={onSubmitHandler} className='.todoInput__form'>
        <input
          className='todoInput__input'
          type='text'
          value={todo}
          onChange={onChangeHandler}
        />
        <button className='todoInput__submitBtn'>ADD</button>
      </form>
    </div>
  )
}

export default TodoInput
