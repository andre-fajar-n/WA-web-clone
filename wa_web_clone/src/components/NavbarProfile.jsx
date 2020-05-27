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

  const [showListStatus, setListStatus] = useState(false)
  const handleCloseListStatus = () => setListStatus(false);
  const handleShowListStatus = () => setListStatus(true);
  return (
    <div style={{ position: "fixed", width: `${(4 / 12 * 100)}%`, left: "0", right: `${4 / 12 * 100}%`, zIndex: "999" }}>
      <Navbar style={{ backgroundColor: "#ededed", }} className="p-0">

        {/* tombol profile */}
        <Nav.Link className="mr-auto" onClick={handleShow}>
          <i md={2} className="fas fa-user-circle"></i>
        </Nav.Link>

        {/* start modal profile */}
        <Modal dialogClassName="modal-profile" show={showProfile} onHide={handleClose}>
          <Modal.Header className="header-profile">
            <Link style={{ color: "#ffffff" }} onClick={handleClose}>
              <i className="fas fa-arrow-left"></i>
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
        {/* end modal profile */}

        {/* start navbar status, new chat, setting */}
        <Nav className="ml-auto" style={{ color: "black" }}>
          <Nav.Link onClick={handleShowListStatus}><i className="fas fa-circle-notch"></i></Nav.Link>

          {/* start modal list status */}
          <Modal dialogClassName="modal-status" show={showListStatus} onHide={handleCloseListStatus}>
            <ListStatus handleCloseListStatus={handleCloseListStatus} />
          </Modal>
          {/* end modal list status */}

          <Nav.Link><i className="fas fa-comment-dots"></i></Nav.Link>
          <Nav.Link><i className="fas fa-ellipsis-v"></i></Nav.Link>
        </Nav>
        {/* end navbar status, new chat, setting */}

      </Navbar>

      {/* input search chat/friend */}
      <Form.Group className="p-2 m-0" style={{ backgroundColor: "#f7f7f7" }}>
        <Form.Control type="text" placeholder="Search or start new chat" style={{ borderRadius: "50px" }} autoFocus></Form.Control>
      </Form.Group>
    </div>
  )
}

export default NavbarProfile;