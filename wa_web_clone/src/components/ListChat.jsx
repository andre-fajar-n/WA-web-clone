import React, { Fragment } from "react"
import Nav from "react-bootstrap/Nav"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const moment = require('moment')

const ListChat = (props) => {
  const username = props.value.data_user.username
  const lastChat = props.value.last_chat.message
  const dateChat = props.value.last_chat.created_at
  return (
    <div>
      <Nav.Link eventKey={`${username}`} style={{ width: "100%" }} className="p-0">
        <Row className="m-0">
          <Col md={2}><i className="fas fa-user-circle"></i></Col>
          <Col md={10} className="p-0">
            <Row className="m-0">
              <Col className="p-0">{username}</Col>
              <Col className="p-0">{moment(dateChat).fromNow('d')}</Col>
            </Row>
            <Row className="m-0">
              {props.biodata.id === props.value.last_chat.user_id ? (
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