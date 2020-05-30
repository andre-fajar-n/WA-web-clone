import axios from "axios"

const url = process.env.REACT_APP_BASE_URL

export const getStatus = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(url + "status", {
        headers: { 'Authorization': 'Bearer ' + getState().user.token }
      })
      dispatch({
        type: "GET_STATUS",
        payload: response.data
      })
    } catch (error) {
      console.error("cannot get status")
    }
  }
}