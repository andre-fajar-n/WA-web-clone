import axios from "axios"

const url = process.env.REACT_APP_BASE_URL

export const changeInputUser = (event) => ({
  type: "CHANGE_INPUT_USER",
  payload: event
})

export const doLogin = () => {
  return async (dispatch, getState) => {
    const dataPhoneNumber = getState().user.loginPhoneNumber
    const dataPassword = getState().user.loginPassword

    try {
      const response = await axios.get(url + "login",
        {
          params: {
            phone_number: dataPhoneNumber,
            password: dataPassword
          }
        })
      dispatch({
        type: "DO_LOGIN",
        payload: response.data
      })

      // start get biodata user
      await axios.get(url + "user", {
        headers: { 'Authorization': 'Bearer ' + getState().user.token }
      })
        .then((responseUser) => {
          dispatch({
            type: "GET_DATA_USER",
            payload: responseUser.data
          })
        })
        .catch((error) => {
          alert("Data tidak ditemukan")
        })
      // end get biodata user

    } catch (error) {
      alert("Anda belum terdaftar. Silahkan daftar terlebih dahulu!")
    }
  }
}

export const register = () => {
  return async (dispatch, getState) => {
    const dataPhoneNumber = getState().user.registerPhoneNumber
    const dataPassword = getState().user.registerPassword
    const bodyRequest = {
      phone_number: dataPhoneNumber,
      password: dataPassword
    }
    try {
      const response = await axios.post(url + "user", bodyRequest)
      dispatch({
        type: "REGISTER",
        payload: response.data
      })
    } catch (error) {
      alert("Phone number have been registered")
    }
  }
}

export const doLogout = () => ({ type: "DO_LOGOUT" })