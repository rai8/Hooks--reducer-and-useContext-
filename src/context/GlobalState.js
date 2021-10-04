import { createContext, useReducer } from 'react'
import combineReducers from 'react-combine-reducers'
import { counterReducer, initialCountState } from '../reducers/counterReducer'
import { initialPersonState, personReducer } from '../reducers/personReducer'

export const GlobalContext = createContext()

//root reducer
const [rootReducer, initialState] = combineReducers({
  count: [counterReducer, initialCountState],
  person: [personReducer, initialPersonState],
})

export const Store = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState)

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
