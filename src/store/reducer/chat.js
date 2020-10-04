const initialChat = {
  listAllMessage: []
}

export default function chatReducer(chatState = initialChat, action) {
  switch (action.type) {
    case "CHANGE_INPUT_MESSAGE":
      return {
        ...chatState,
        [action.payload.target.name]: action.payload.target.value
      }
    case "GET_ALL_MESSAGE":
      return {
        ...chatState,
        listAllMessage: action.payload
      }
    default:
      return chatState
  }
}