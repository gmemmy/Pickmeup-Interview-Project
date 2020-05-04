import { AsyncStorage } from 'react-native'

export const setCurrentUser = async (dispatch) => {
  const user = await AsyncStorage.getItem('user')
  return dispatch({
    type: 'CURRENT_USER',
    payload: user && JSON.parse(user),
  })
}

export const setPhoneNumber = (dispatch, phoneNumber) => {
  if (phoneNumber) {
    return dispatch({
      type: 'SET_PHONE_NUMBER',
      phoneNumber,
    })
  }
}
