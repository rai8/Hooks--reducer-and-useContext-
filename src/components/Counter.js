import { useReducer, useState } from 'react'
import '../App.css'

//functions used by reducer
const reducerFunction = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }

    case 'DECREMENT':
      return { ...state, count: state.count - 1 }
    case 'INITIALIZE_COUNT':
      return { ...state, count: action.payload }

    default:
      return state
  }
}

const initialState = {
  count: 0,
}

const Counter = () => {
  const [input, setInput] = useState(0)

  //using useReducer
  const [state, dispatch] = useReducer(reducerFunction, initialState)
  return (
    <div className='App'>
      <p>GLOBAL STATE</p>
      <div>
        <label>Start Count</label>
        <input
          type='number'
          value={input}
          onChange={(e) => setInput(parseInt(e.target.value))}
        />

        <button
          onClick={() => dispatch({ type: 'INITIALIZE_COUNT', payload: input })}
        >
          Initialize Count
        </button>
      </div>
      <div style={{ display: 'flex' }}>
        <button
          style={{ marginRight: '10px' }}
          onClick={() => dispatch({ type: 'DECREMENT' })}
        >
          Decrement
        </button>
        <p>{state.count}</p>
        <button
          style={{ marginLeft: '10px' }}
          onClick={() => dispatch({ type: 'INCREMENT' })}
        >
          Increment
        </button>
      </div>
    </div>
  )
}

export default Counter
