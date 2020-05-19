import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const NavbarProfile = (props) => {
  return (
    <Navbar style={{ backgroundColor: "#ededed", position: "fixed" }} className="p-0">
      <Nav.Link className="mr-auto">
        <Col md={2}><i class="fas fa-user-circle"></i></Col>
      </Nav.Link>
      <Nav className="ml-auto" style={{ color: "black" }}>
        <Nav.Link><i class="fas fa-circle-notch"></i></Nav.Link>
        <Nav.Link><i class="fas fa-comment-dots"></i></Nav.Link>
        <Nav.Link><i class="fas fa-ellipsis-v"></i></Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavbarProfile;