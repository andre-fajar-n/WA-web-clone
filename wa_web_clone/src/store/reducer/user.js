const initialStateUser = {
  token: "",
  biodata: "",
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
    case "GET_DATA_USER":
      return {
        ...userState,
        biodata: action.payload
      }
    default:
      return userState
  }
}