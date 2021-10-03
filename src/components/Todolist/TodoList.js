import React, { useContext } from 'react'
import todoContext from '../../context/todo/todo-context'
import './todo.css'
import TodoItem from './TodoItem/TodoItem'
const TodoList = () => {
  const { todos, toggleTodo, deleteTodo } = useContext(todoContext)
  return (
    <div className='todoList'>
      <h3 className='todoList__title'>TO-DOS</h3>
      <div className='todoList__todos'>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            complete={todo.complete}
            toggleTodo={() => toggleTodo(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default TodoList
