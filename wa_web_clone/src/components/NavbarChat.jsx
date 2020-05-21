import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const NavbarChat = (props) => {
  return (
    <Navbar id="navbar-chat" style={{ width: `${8 / 12 * 100}%`, left: `${4 / 12 * 100}%` }} className="p-0">
      <Nav.Link className="mr-auto">
        <Row>
          <Col md={2}><i class="fas fa-user-circle"></i></Col>
          <Col md={"auto"}>
            <div>{props.item}</div>
            <div>Last seen</div>
          </Col>
        </Row>
      </Nav.Link>
      <Nav className="ml-auto" style={{ color: "black" }}>
        <Nav.Link><i class="fas fa-search"></i></Nav.Link>
        <Nav.Link><i class="fas fa-paperclip"></i></Nav.Link>
        <Nav.Link><i class="fas fa-ellipsis-v"></i></Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavbarChat;