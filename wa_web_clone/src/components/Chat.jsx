import React, { Fragment } from "react"
import Dropdown from 'react-bootstrap/Dropdown'

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
  // cek jika tanggal created_at sudah ganti, update variabel 'showDate'
  let showDate = moment.utc(props.value.created_at).format('D MMM YYYY')
  let changeDate = true
  if (dateBefore === '') {
    changeDate = true
    dateBefore = showDate
  } else {
    if (dateBefore === showDate) {
      changeDate = false
    } else {
      dateBefore = showDate
      changeDate = true
    }
  }


  // memilih tampilan 'showDate' berdasarkan sudah berapa lama dari hari ini
  const dateNow = parseInt(moment().format('D'))
  const dateChat = parseInt(moment.utc(props.value.created_at).format('D'))
  if (dateNow - dateChat < 1) {
    showDate = 'Today'
  } else if (dateNow - dateChat === 1) {
    showDate = "Yesterday"
  } else if (dateNow - dateChat < 8) {
    showDate = moment.utc(props.value.created_at).format('dddd')
  } else {
    showDate = moment.utc(props.value.created_at).format('D MMM YYYY')
  }

  // delete message
  const deleteMessage = async (id) => {
    await props.deleteMessage(id)
    await props.history.replace('/')
    await props.getConversation()
  }
  console.warn("cek chat", props.item.group_chat_id)
  return (
    <Fragment>
      {changeDate ? (
        <div id="date-chat" className="m-auto">{showDate}</div>
      ) : (
          <Fragment></Fragment>
        )}
      <Dropdown>
        {props.value.user === undefined ? (
          <div id="user-chat" style={{ display: "flex", justifyContent: "space-between" }}>
            <div>{props.value.message}</div>
            <div>{moment.utc(props.value.created_at).format('HH:mm')}</div>
          </div>
        ) : (
            <div id="friend-chat">
              {props.item.group_chat_id === undefined ? (
                <Fragment></Fragment>
              ) : (
                  <div style={{ color: `${RandomColor()}`, fontWeight: "bold" }}>{props.value.user.username}</div>
                )}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>{props.value.message}</div>
                <div style={{ display: "flex" }}>
                  <div>{moment.utc(props.value.created_at).format('HH:mm')}</div>
                  <Dropdown.Toggle split variant="success" />
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => deleteMessage(props.value.id)}>Delete Message</Dropdown.Item>
                  </Dropdown.Menu>
                </div>
              </div>
            </div>
          )}
      </Dropdown>
    </Fragment>
  )
}

export default Chat;