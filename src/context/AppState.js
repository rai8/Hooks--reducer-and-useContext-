import React, { useState } from 'react'
import AppContext from './app-context'

const AppState = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true)
  return (
    <AppContext.Provider
      value={{
        isAuth,
        setIsAuth,
        message: 'This is from the context   ',
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppState
