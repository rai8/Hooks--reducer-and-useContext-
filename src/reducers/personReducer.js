export const initialPersonState = {
  person: '',
}

export const personReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return { ...state, person: action.payload }

    default:
      return state
  }
}
