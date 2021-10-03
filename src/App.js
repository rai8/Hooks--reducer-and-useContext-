import { useReducer } from 'react'
import './App.css'
import Answers from './components/answer/Answers'
import Progress from './components/progress/Progress'
import Question from './components/question/Question'
import {
  RESET_QUIZ,
  SET_ANSWERS,
  SET_CURRENT_ANSWER,
  SET_CURRENT_QUESTION,
  SET_ERROR,
  SET_SHOW_RESULTS,
} from './context/quiz/quiz-actions'
import quizReducer from './context/quiz/quizReducer'
import { questions } from './data'

function App() {
  const initialState = {
    currentQuestion: 0,
    currentAnswer: '',
    answers: [],
    error: '',
    showResults: false,
  }

  const [state, dispatch] = useReducer(quizReducer, initialState)
  const { currentQuestion, currentAnswer, answers, error, showResults } = state

  const question = questions[currentQuestion]

  //show result page
  const renderResultMark = (question, answer) => {
    if (question.correct_answer === answer.answer) {
      return <span className='correct'>Correct</span>
    }
    return <span className='failed'>Failed</span>
  }
  const renderResultData = () => {
    return answers.map(answer => {
      console.log(answers)
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
    dispatch({ type: RESET_QUIZ })
  }

  //go to next question
  const next = () => {
    const answer = {
      questionId: question.id,
      answer: currentAnswer,
    }
    if (!currentAnswer) {
      dispatch({
        type: SET_ERROR,
        payload: 'Please select an option',
      })
      return
    }
    answers.push(answer)
    dispatch({
      type: SET_ANSWERS,
      payload: answers,
    })

    dispatch({
      type: SET_CURRENT_ANSWER,
      payload: '',
    })
    if (currentQuestion + 1 < questions.length) {
      dispatch({
        type: SET_CURRENT_QUESTION,
        payload: currentQuestion + 1,
      })

      return
    }
    dispatch({
      type: SET_SHOW_RESULTS,
      payload: true,
    })
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
          dispatch={dispatch}
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
