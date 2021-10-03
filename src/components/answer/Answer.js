import React from 'react'
import { SET_CURRENT_ANSWER, SET_ERROR } from '../../context/quiz/quiz-actions'

const Answer = ({ letter, answer, selected, dispatch }) => {
  let classes = ['answer']
  if (selected) {
    classes.push('selected')
  }
  const handleClick = e => {
    dispatch({
      type: SET_CURRENT_ANSWER,
      payload: e.target.value,
    })
    dispatch({
      type: SET_ERROR,
      payload: '',
    })
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
