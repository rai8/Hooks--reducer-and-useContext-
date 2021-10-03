import React from 'react'

const Answer = ({ letter, answer, selected, handleClick }) => {
  let classes = ['answer']
  if (selected) {
    classes.push(selected)
  }
  return (
    <div>
      <button
        value={letter}
        className={classes.join(' ')}
        onClick={handleClick}
      >
        <span className='letter'>{letter}. </span>
        {answer}
      </button>
    </div>
  )
}

export default Answer
