import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { useState } from "react"
import { Link } from "react-router-dom"

const NavbarProfile = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ position: "fixed", width: `${(4 / 12 * 100)}%`, left: "0", right: `${4 / 12 * 100}%`, zIndex: "999" }}>
      <Navbar style={{ backgroundColor: "#ededed", }} className="p-0">
        <Nav.Link className="mr-auto" onClick={handleShow}>
          <i md={2} class="fas fa-user-circle"></i>
        </Nav.Link>

        {/* start modal */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header style={{ backgroundColor: "#00bfa5", color: "#ffffff" }}>
            <Link style={{ color: "#ffffff" }} onClick={handleClose}><i class="fas fa-arrow-left"></i></Link>
            <div>Profile</div>
          </Modal.Header>
          <Modal.Body className="p-0">
            <div style={{ backgroundColor: "#ededed" }}>Profile Picture</div>
            <div>Name</div>
            <div style={{ backgroundColor: "#ededed" }}>explanation name</div>
            <div>about</div>
          </Modal.Body>

        </Modal>
        {/* end modal */}

        <Nav className="ml-auto" style={{ color: "black" }}>
          <Nav.Link><i class="fas fa-circle-notch"></i></Nav.Link>
          <Nav.Link><i class="fas fa-comment-dots"></i></Nav.Link>
          <Nav.Link><i class="fas fa-ellipsis-v"></i></Nav.Link>
        </Nav>
      </Navbar>
      <Form.Group className="p-2 m-0" style={{ backgroundColor: "#f7f7f7" }}>
        <Form.Control type="text" placeholder="Search or start new chat" style={{ borderRadius: "50px" }} autoFocus></Form.Control>
      </Form.Group>
    </div>
  )
}

export default NavbarProfile;