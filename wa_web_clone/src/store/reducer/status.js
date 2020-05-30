const initialStatus = {
  listStatus: []
}

export default function statusReducer(statusState = initialStatus, action) {
  switch (action.type) {
    case "GET_STATUS":
      return {
        ...statusState,
        listStatus: action.payload
      }
    default:
      return statusState
  }
}