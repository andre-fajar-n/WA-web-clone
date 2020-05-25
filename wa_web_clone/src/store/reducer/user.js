const initialStateUser = {
  token: "",
  isLogin: false
}

export default function userReducer(userState = initialStateUser, action) {
  switch (action.type) {
    case "CHANGE_INPUT_USER":
      return {
        ...userState,
        [action.payload.target.name]: action.payload.target.value
      }
    case "DO_LOGIN":
      return {
        ...userState,
        token: action.payload.token,
        isLogin: true
      }
    default:
      return userState
  }
}