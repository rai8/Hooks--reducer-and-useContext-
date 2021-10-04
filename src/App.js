import React, { useContext } from 'react'
import { DECREMENT, INCREMENT, RESET } from './actions/counter-actions'
import './App.css'
import { GlobalContext } from './context/GlobalState'

function App() {
  const { state, dispatch } = useContext(GlobalContext)
  console.log(state.count.begin)
  return (
    <div className='App'>
      <p>GLOBAL STATE</p>

      <div style={{ display: 'flex' }}>
        <button
          style={{ marginRight: '10px' }}
          onClick={() => dispatch({ type: DECREMENT })}
        >
          Decrement
        </button>
        <p>{state.count.begin}</p>
        <button
          style={{ marginLeft: '10px' }}
          onClick={() => dispatch({ type: INCREMENT })}
        >
          Increment
        </button>
        <button
          style={{ marginLeft: '10px' }}
          onClick={() => dispatch({ type: RESET })}
        >
          RESET
        </button>
      </div>
    </div>
  )
}

export default App
