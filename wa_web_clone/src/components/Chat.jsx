import React, { Fragment } from "react"

const RandomColor = () => {
  const hexadecimal = '123456789abcdef'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += hexadecimal[Math.floor(Math.random() * 16)]
  }
  return color
}

const Chat = (props) => {
  return (
    <Fragment>
      {props.value % 3 ? (
        <Fragment></Fragment>
      ) : (
          <div id="date-chat" className="m-auto">{props.value}Date Chat</div>
        )}
      {props.value % 2 ? (
        <div id="friend-chat">
          <div style={{ color: `${RandomColor()}`, fontWeight: "bold" }}>{props.value} Isi chat</div>
          <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        </div>
      ) : (
          <div id="user-chat">
            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
          </div>
        )}
    </Fragment>
  )
}

export default Chat;