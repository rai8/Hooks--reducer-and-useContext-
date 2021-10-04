import { DECREMENT, INCREMENT, RESET } from '../actions/counter-actions'

export const initialCountState = {
  begin: 0,
}

export const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, begin: state.begin + 1 }

    case DECREMENT:
      return { ...state, begin: state.begin - 1 }
    case RESET:
      return { ...state, begin: 0 }

    default:
      return state
  }
}
