import React, { useContext } from 'react'
import QuizContext from '../../context/quiz/QuizContext'
import Answer from './Answer'

const Answers = () => {
  const { state, dispatch } = useContext(QuizContext)
  const { currentAnswer, currentQuestion, questions } = state
  const question = questions[currentQuestion]
  return (
    <div>
      <Answer
        letter='a'
        answer={question.answer_a}
        selected={currentAnswer === 'a'}
        dispatch={dispatch}
      />
      <Answer
        letter='b'
        answer={question.answer_b}
        selected={currentAnswer === 'b'}
        dispatch={dispatch}
      />
      <Answer
        letter='c'
        answer={question.answer_c}
        selected={currentAnswer === 'c'}
        dispatch={dispatch}
      />
      <Answer
        letter='d'
        answer={question.answer_d}
        selected={currentAnswer === 'd'}
        dispatch={dispatch}
      />
    </div>
  )
}

export default Answers
