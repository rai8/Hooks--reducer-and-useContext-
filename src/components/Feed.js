import React, { useContext } from 'react'
import AppContext from '../context/app-context'

const Feed = () => {
  const { message } = useContext(AppContext)
  return (
    <div>
      <h2>This is the Feed page</h2>
      <p>{message}</p>
    </div>
  )
}

export default Feed
