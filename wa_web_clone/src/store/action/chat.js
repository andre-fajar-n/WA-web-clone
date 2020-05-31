import axios from "axios"

const url = process.env.REACT_APP_BASE_URL

export const changeInputMessage = (event) => ({
  type: "CHANGE_INPUT_MESSAGE",
  payload: event
})

export const sendMessage = (id, username) => {
  return async (dispatch, getState) => {
    let baseUrl = ""
    let params = {}
    if (username === undefined) {
      baseUrl = url + "message_group"
      params = {
        group_chat_id: id,
        message: getState().chat.message
      }
    } else {
      baseUrl = url + "personal_message"
      params = {
        user2_id: id,
        message: getState().chat.message
      }
    }
    try {
      await axios({
        method: "POST",
        url: baseUrl,
        params: params,
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token") }
      })
    } catch (error) {
      console.error("failed to send message")
    }
  }
}

export const deleteMessage = (id) => {
  return async (dispatch, getState) => {
    try {
      await axios({
        method: "DELETE",
        url: `${url}personal_message/${id}`,
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token") }
      })
    } catch (error) {
      console.error("message cannot delete")
    }
  }
}

export const getAllMessage = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(url + "all_message", {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token") }
      })
      dispatch({
        type: "GET_ALL_MESSAGE",
        payload: response.data
      })
    } catch (error) {
      console.error("message not found")
    }
  }
}