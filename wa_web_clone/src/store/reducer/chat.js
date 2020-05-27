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
    default:
      return chatState
  }
}