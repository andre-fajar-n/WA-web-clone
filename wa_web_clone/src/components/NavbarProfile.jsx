import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { useState } from "react"
import { Link } from "react-router-dom"
import ListStatus from "./ListStatus"

const NavbarProfile = (props) => {
  const [showProfile, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showStatus, setListStatus] = useState(false)
  const handleCloseListStatus = () => setListStatus(false);
  const handleShowListStatus = () => setListStatus(true);
  return (
    <div style={{ position: "fixed", width: `${(4 / 12 * 100)}%`, left: "0", right: `${4 / 12 * 100}%`, zIndex: "999" }}>
      <Navbar style={{ backgroundColor: "#ededed", }} className="p-0">
        <Nav.Link className="mr-auto" onClick={handleShow}>
          <i md={2} class="fas fa-user-circle"></i>
        </Nav.Link>

        {/* start modal */}
        <Modal dialogClassName="modal-profile" show={showProfile} onHide={handleClose}>
          <Modal.Header className="header-profile">
            <Link style={{ color: "#ffffff" }} onClick={handleClose}>
              <i class="fas fa-arrow-left"></i>
            </Link>
            <div>Profile</div>
          </Modal.Header>
          <Modal.Body className="p-0 body-profile">
            <div style={{ backgroundColor: "#ededed" }}>Profile Picture</div>
            <div>Name</div>
            <div style={{ backgroundColor: "#ededed" }}>explanation name</div>
            <div>about</div>
          </Modal.Body>
        </Modal>
        {/* end modal */}

        <Nav className="ml-auto" style={{ color: "black" }}>
          <Nav.Link onClick={handleShowListStatus}><i class="fas fa-circle-notch"></i></Nav.Link>

          <Modal dialogClassName="modal-status" show={showStatus} onHide={handleCloseListStatus}>
            <ListStatus handleCloseListStatus={handleCloseListStatus} />
          </Modal>

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