import { setCurrentUser } from './user'

export default (dispatch) => {
  return {
    setCurrentUser: setCurrentUser.bind(null, dispatch)
  }
}