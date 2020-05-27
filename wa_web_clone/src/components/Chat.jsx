import React, { Fragment } from "react"

const moment = require('moment')

const RandomColor = () => {
  const hexadecimal = '123456789abcdef'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += hexadecimal[Math.floor(Math.random() * 16)]
  }
  return color
}

let dateBefore = ''

const Chat = (props) => {
  let dateNow = moment(props.value.created_at).format('D MMM YYYY')
  let changeDate = true
  if (dateBefore === dateNow) {
    changeDate = false
  } else {
    dateBefore = dateNow
    changeDate = true
  }
  console.warn("cek di chat", moment(props.value.created_at).format('E'))
  return (
    <Fragment>
      {changeDate ? (
        <div id="date-chat" className="m-auto">{dateNow}</div>
      ) : (
          <Fragment></Fragment>
        )}
      {/* {props.value % 3 ? (
      ) : (
        )} */}
      {props.value.user === undefined ? (
        <div id="user-chat">
          <div>{props.value.message}</div>
        </div>
      ) : (
          <div id="friend-chat">
            <div style={{ color: `${RandomColor()}`, fontWeight: "bold" }}>{props.value.user.username}</div>
            <div>{props.value.message}</div>
          </div>
        )}
    </Fragment>
  )
}

export default Chat;