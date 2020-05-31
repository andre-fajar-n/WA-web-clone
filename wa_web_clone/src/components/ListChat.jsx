import React, { Fragment } from "react"
import Nav from "react-bootstrap/Nav"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const moment = require('moment')

const ListChat = (props) => {
  let username = ""
  if (typeof (props.value.info_chat.username) == "string") {
    username = props.value.info_chat.username
  } else {
    username = props.value.info_chat.name
  }
  const lastChat = props.value.last_chat.message
  const dateChat = parseInt(moment.utc(props.value.last_chat.created_at).format('D'))
  const dateNow = parseInt(moment().format('D'))
  let showLastChat = ''
  if (dateNow - dateChat < 1) {
    showLastChat = moment.utc(props.value.last_chat.created_at).format('HH:mm')
  } else if (dateNow - dateChat === 1) {
    showLastChat = "Yesterday"
  } else if (dateNow - dateChat < 8) {
    showLastChat = moment.utc(props.value.last_chat.created_at).format('dddd')
  } else {
    showLastChat = moment.utc(props.value.last_chat.created_at).format('DD/M/YYYY')
  }
  return (
    <div>
      <Nav.Link eventKey={`${username}`} style={{ width: "100%" }} className="p-0">
        <Row className="m-0">
          <Col md={2}><i className="fas fa-user-circle"></i></Col>
          <Col md={10} className="p-0">
            <Row className="m-0">
              <Col className="p-0">{username}</Col>
              <Col className="p-0">{showLastChat}</Col>
            </Row>
            <Row className="m-0">
              {localStorage.getItem("id_user") == props.value.last_chat.user_id ? (
                <i className="fas fa-check"></i>
              ) : (
                  <Fragment></Fragment>
                )}
              {lastChat}
            </Row>
          </Col>
        </Row>
      </Nav.Link>
      <hr />
    </div>
  )
}

export default ListChat;