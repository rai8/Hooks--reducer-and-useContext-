import React from 'react'
import './todo.css'

const TodoItem = ({ text, toggleTodo, deleteTodo, complete }) => {
  return (
    <div className='todoItem'>
      <span
        className='todoItem__text'
        style={{ textDecoration: complete ? 'line-through' : 'none' }}
      >
        {text}
      </span>
      <div>
        <button className='todoItem__toggleBtn' onClick={toggleTodo}>
          TOGGLE
        </button>
        <button className='todoItem__deleteBtn' onClick={deleteTodo}>
          DELETE
        </button>
      </div>
    </div>
  )
}

export default TodoItem
