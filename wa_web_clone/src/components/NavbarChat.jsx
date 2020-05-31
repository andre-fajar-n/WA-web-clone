import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const NavbarChat = (props) => {
  let username = ""
  if (typeof (props.item.info_chat.username) == "string") {
    username = props.item.info_chat.username
  } else {
    username = props.item.info_chat.name
  }
  return (
    <Navbar id="navbar-chat"
      style={{ width: `${8 / 12 * 100}%`, left: `${4 / 12 * 100}%`, borderLeft: "1px solid rgba(155, 154, 154, 0.5)" }}
      className="p-0">
      <Nav.Link className="mr-auto">
        <Row>
          <Col md={2}><i className="fas fa-user-circle"></i></Col>
          <Col md={"auto"}>
            <div>{username}</div>
            <div>Last seen</div>
          </Col>
        </Row>
      </Nav.Link>
      <Nav className="ml-auto" style={{ color: "black" }}>
        <Nav.Link><i style={{ fontSize: "20px" }} className="fas fa-search"></i></Nav.Link>
        <Nav.Link><i style={{ fontSize: "20px" }} className="fas fa-paperclip"></i></Nav.Link>
        <Nav.Link><i style={{ fontSize: "20px" }} className="fas fa-ellipsis-v"></i></Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavbarChat;