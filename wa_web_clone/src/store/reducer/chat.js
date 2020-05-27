const initialChat = {
  listConversation: [],
}

export default function chatReducer(chatState = initialChat, action) {
  switch (action.type) {
    case "GET_CONVERSATION":
      return {
        ...chatState,
        listConversation: action.payload
      }
    case "CHANGE_INPUT_MESSAGE":
      return {
        ...chatState,
        [action.payload.target.name]: action.payload.target.value
      }
    default:
      return chatState
  }
}