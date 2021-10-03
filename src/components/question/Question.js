import React, { useContext } from 'react'
import QuizContext from '../../context/quiz/QuizContext'

const Question = () => {
  const { state } = useContext(QuizContext)
  const { questions, currentQuestion } = state
  const question = questions[currentQuestion]

  return (
    <div>
      <h2>{question.question}</h2>
    </div>
  )
}

export default Question
