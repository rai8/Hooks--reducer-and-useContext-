import { useState } from 'react'
import './App.css'
import Answers from './components/answer/Answers'
import Progress from './components/progress/Progress'
import Question from './components/question/Question'
import { questions } from './data'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [currentAnswer, setCurrentAnswer] = useState('')
  const [answers, setAnswers] = useState([])
  const [showResults, setShowResults] = useState(false)

  const [error, setError] = useState()
  const question = questions[currentQuestion]

  const handleClick = e => {
    setCurrentAnswer(e.target.value)
    setError('')
  }

  //show result page
  const renderResultMark = (question, answer) => {
    if (question.correct_answer === answer.answer) {
      return <span className='correct'>Correct</span>
    }
    return <span className='failed'>Failed</span>
  }
  const renderResultData = () => {
    return answers.map(answer => {
      const question = questions.find(
        question => question.id === answer.questionId
      )
      return (
        <div key={question.id}>
          {question.question} - {renderResultMark(question, answer)}
        </div>
      )
    })
  }

  //restart quiz
  const restart = () => {
    setAnswers([])
    setCurrentAnswer('')
    setCurrentQuestion(0)
    setShowResults(false)
  }

  //go to next question
  const next = () => {
    const answer = {
      questionId: question.id,
      answer: currentAnswer,
    }
    if (!currentAnswer) {
      setError('Please select an option')
      return
    }
    answers.push(answer)
    setAnswers(answers)
    setCurrentAnswer('')
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
      return
    }
    setShowResults(true)
  }
  if (showResults) {
    return (
      <div className='container results'>
        <h2>Results</h2>
        <ul> {renderResultData()}</ul>
        <button className='btn btn-primary' onClick={restart}>
          {' '}
          Restart
        </button>
      </div>
    )
  } else {
    return (
      <div className='container'>
        <Progress current={currentQuestion + 1} total={questions.length} />
        <Question question={question.question} />
        {error && <div className='error'>{error}</div>}
        <Answers
          question={question}
          currentAnswer={currentAnswer}
          handleClick={handleClick}
        />
        <button className='btn btn-primary' onClick={next}>
          {' '}
          Confirm and Continue
        </button>
      </div>
    )
  }
}

export default App
