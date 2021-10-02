import React, { useContext } from 'react'
import AppContext from '../context/app-context'

const Homepage = () => {
  //using the useContext- destructuring
  const { message, isAuth, setIsAuth } = useContext(AppContext)
  return (
    <div>
      <h2 style={{ color: isAuth ? 'red' : 'green' }}>This is the homepage</h2>
      {isAuth ? (
        <button onClick={() => setIsAuth(!isAuth)}>Logout</button>
      ) : (
        <button onClick={() => setIsAuth(!isAuth)}>Login</button>
      )}
      <p>{message}</p>
    </div>
  )
}

export default Homepage
