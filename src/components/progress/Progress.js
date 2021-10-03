import React from 'react'

const Progress = ({ current, total }) => {
  return (
    <div>
      <h2>
        Question {current} of {total}
      </h2>
    </div>
  )
}

export default Progress
