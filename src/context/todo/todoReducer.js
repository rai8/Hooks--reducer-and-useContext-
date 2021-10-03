//reducer takes 2 parameters- state and action

import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './todo-actions'

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, complete: !todo.complete }
            : todo
        ),
      }

    default:
      return state
  }
}

export default todoReducer
