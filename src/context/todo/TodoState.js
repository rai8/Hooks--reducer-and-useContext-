import React, { useReducer } from 'react'
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './todo-actions'
import TodoContext from './todo-context'
import todoReducer from './todoReducer'

const TodoState = ({ children }) => {
  //intialize reducer- define initial states
  const initialState = {
    todos: [], //empty list
  }
  const [state, dispatch] = useReducer(todoReducer, initialState)

  //functions we are going to need
  //add todo
  const addTodo = (todo) => {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    })
  }

  //delete todo
  const deleteTodo = (todoId) => {
    dispatch({
      type: DELETE_TODO,
      payload: todoId,
    })
  }

  //toggle todo
  const toggleTodo = (todoId) => {
    dispatch({
      type: TOGGLE_TODO,
      payload: todoId,
    })
  }

  return (
    <TodoContext.Provider
      value={{ todos: state.todos, addTodo, deleteTodo, toggleTodo }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoState
