import React from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavbarChat from "../components/NavbarChat"
import Form from "react-bootstrap/Form"
import Tab from 'react-bootstrap/Tab'
import Chat from "./Chat"

const ShowTabChat = (props) => {
  let username = ''
  if (typeof (props.item.info_chat.username) == "string") {
    username = props.item.info_chat.username
  } else {
    username = props.item.info_chat.name
  }
  return (
    <Tab.Pane eventKey={`${username}`}>
      <NavbarChat item={props.item} />

      {/* (start) menampilkan isi chat */}
      <div id="box-chat">
        {props.item.all_chat.map((value, index) => (
          <Chat
            key={index}
            {...props}
            value={value} />
        ))}
      </div>
      {/* (end) menampilkan isi chat */}

      <Form.Group onSubmit={(e) => e.preventDefault()} style={{ backgroundColor: "#f7f7f7", padding: "10px 0", margin: "0" }}>
        <Row>
          <Col sm={1} className="p-0 m-auto" style={{ textAlign: "center" }}>
            <i className="far fa-grin" style={{ fontSize: "30px" }}></i>
          </Col>
          <Col sm={9} className="p-0">
            <Form.Control
              onChange={(e) => props.changeInputMessage(e)}
              name="message"
              type="text"
              id="sendMessage"
              placeholder="Type a message"
              style={{ borderRadius: "50px" }}>
            </Form.Control>
          </Col>
          <Col sm={1} className="p-0 m-auto" style={{ textAlign: "center" }}>
            <i onClick={() => props.postAfterSendMessage(props.item.info_chat.id, props.item.info_chat.username)} className="far fa-paper-plane" style={{ fontSize: "30px" }}></i>
          </Col>
          <Col sm={1} className="p-0 m-auto" style={{ textAlign: "center" }}>
            <i className="fas fa-microphone" style={{ fontSize: "30px" }}></i>
          </Col>
        </Row>
      </Form.Group>
    </Tab.Pane>
  )
}

export default ShowTabChat;