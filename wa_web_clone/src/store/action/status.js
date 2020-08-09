import axios from "axios"

const url = process.env.REACT_APP_BASE_URL

export const getStatus = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(url + "status", {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token") }
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

export const getUserStatus = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(url + "status/" + id, {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token") }
      })
      dispatch({
        type: "GET_USER_STATUS",
        payload: response.data
      })
    } catch (error) {
      console.error("cannot get user status")
    }
  }
}