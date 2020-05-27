import axios from "axios"

const url = process.env.REACT_APP_BASE_URL

export const getConversation = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(url + "conversation", {
        headers: { 'Authorization': 'Bearer ' + getState().user.token }
      })
      dispatch({
        type: "GET_CONVERSATION",
        payload: response.data
      })
    } catch (error) {
      console.error("conversation not found")
    }
  }
}

export const changeInputMessage = (event) => ({
  type: "CHANGE_INPUT_MESSAGE",
  payload: event
})

export const sendMessage = (id) => {
  return async (dispatch, getState) => {
    try {
      await axios({
        method: "POST",
        url: `${url}personal_message`,
        params: {
          user2_id: id,
          message: getState().chat.message
        },
        headers: { 'Authorization': 'Bearer ' + getState().user.token }
      })
    } catch (error) {
      console.error("failed to send message")
    }
  }
}