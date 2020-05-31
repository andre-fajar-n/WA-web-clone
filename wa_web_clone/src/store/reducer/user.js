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
    default:
      return userState
  }
}