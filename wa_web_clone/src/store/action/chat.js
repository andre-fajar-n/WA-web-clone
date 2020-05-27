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
      alert("conversation not found")
    }
  }
}