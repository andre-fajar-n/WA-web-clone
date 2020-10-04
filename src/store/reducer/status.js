const initialStatus = {
  listStatus: [],
  userStatus: []
}

export default function statusReducer(statusState = initialStatus, action) {
  switch (action.type) {
    case "GET_STATUS":
      return {
        ...statusState,
        listStatus: action.payload
      }
    case "GET_USER_STATUS":
      return {
        ...statusState,
        userStatus: action.payload
      }
    default:
      return statusState
  }
}