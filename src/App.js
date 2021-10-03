import './App.css'

import TodoInput from './components/Todoinput/TodoInput'
import TodoList from './components/Todolist/TodoList'
import TodoState from './context/todo/TodoState'

function App() {
  return (
    <div className='app'>
      <div className='app__todoApp'>
        <TodoState>
          <TodoInput />
          <TodoList />
        </TodoState>
      </div>
    </div>
  )
}

export default App
