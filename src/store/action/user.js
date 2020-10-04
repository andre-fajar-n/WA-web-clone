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

      localStorage.setItem("token", response.data.token)
      // start get biodata user
      await axios.get(url + "user", {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token") }
      })
        .then((responseUser) => {
          localStorage.setItem("id_user", responseUser.data.id)
          localStorage.setItem("username", responseUser.data.username)
          localStorage.setItem("phone_number", responseUser.data.phone_number)
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
    const dataUsername = getState().user.registerUsername
    const dataPhoneNumber = getState().user.registerPhoneNumber
    const dataPassword = getState().user.registerPassword
    const bodyRequest = {
      username: dataUsername,
      phone_number: dataPhoneNumber,
      password: dataPassword
    }
    try {
      const response = await axios.post(url + "user", bodyRequest)

      // start login
      try {
        const response = await axios.get(url + "login",
          {
            params: {
              phone_number: dataPhoneNumber,
              password: dataPassword
            }
          })
        localStorage.setItem("token", response.data.token)

        // start get biodata user
        await axios.get(url + "user", {
          headers: { 'Authorization': 'Bearer ' + getState().user.token }
        })
          .then((responseUser) => {
            localStorage.setItem("id_user", responseUser.data.id)
            localStorage.setItem("username", responseUser.data.username)
            localStorage.setItem("phone_number", responseUser.data.phone_number)
          })
          .catch((error) => {
            alert("Data tidak ditemukan")
          })
        // end get biodata user

      } catch (error) {
        alert("Anda belum terdaftar. Silahkan daftar terlebih dahulu!")
      }
      // end login

    } catch (error) {
      alert("Nomor sudah terdaftar")
    }
  }
}

export const doLogout = () => {
  return async () => {
    localStorage.removeItem("token")
    localStorage.removeItem("id_user")
    localStorage.removeItem("username")
    localStorage.removeItem("phone_number")
  }
  // { type: "DO_LOGOUT" }
}