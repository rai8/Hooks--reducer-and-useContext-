import React from 'react'
import Answer from './Answer'

const Answers = ({ question, currentAnswer, handleClick }) => {
  return (
    <div>
      <Answer
        letter='a'
        answer={question.answer_a}
        selected={currentAnswer === 'a'}
        handleClick={handleClick}
      />
      <Answer
        letter='b'
        answer={question.answer_b}
        selected={currentAnswer === 'b'}
        handleClick={handleClick}
      />
      <Answer
        letter='c'
        answer={question.answer_c}
        selected={currentAnswer === 'c'}
        handleClick={handleClick}
      />
      <Answer
        letter='d'
        answer={question.answer_d}
        selected={currentAnswer === 'd'}
        handleClick={handleClick}
      />
    </div>
  )
}

export default Answers
