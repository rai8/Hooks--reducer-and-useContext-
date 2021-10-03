import {
  RESET_QUIZ,
  SET_ANSWERS,
  SET_CURRENT_ANSWER,
  SET_CURRENT_QUESTION,
  SET_ERROR,
  SET_SHOW_RESULTS,
} from './quiz-actions'

const quizReducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_ANSWER:
      return {
        ...state,
        currentAnswer: action.payload,
      }
    case SET_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: action.payload,
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case SET_SHOW_RESULTS:
      return {
        ...state,
        showResults: action.payload,
      }
    case RESET_QUIZ:
      return {
        ...state,
        answers: [],
        currentAnswer: '',
        currentQuestion: 0,
        error: '',
        showResults: false,
      }
    case SET_ANSWERS:
      return {
        ...state,
        answers: action.payload,
      }

    default:
      return state
  }
}

export default quizReducer
