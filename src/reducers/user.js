import initialState from './initialState'

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CURRENT_USER':
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}

export default userReducer