import { createContext, useReducer } from 'react'
import { ADD_TRANSACTION, DELETE_TRANSACTION } from './app-actons'
import { appReducer } from './AppReducer'

//create-context
export const GlobalContext = createContext()

//initial state for the apps
const initialState = {
  transactions: [],
}

//provider compoment
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  //actions
  const deleteTransaction = id => {
    dispatch({ type: DELETE_TRANSACTION, payload: id })
  }

  //add transaction
  const addTransaction = transaction => {
    dispatch({ type: ADD_TRANSACTION, payload: transaction })
  }

  const { transactions } = state
  return (
    <GlobalContext.Provider
      value={{
        transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
