import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { useState } from "react"
import { Link, } from "react-router-dom"
import ListStatus from "./ListStatus"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
// import Dropdown from "react-bootstrap/Dropdown"

const NavbarProfile = (props) => {
  const [showProfile, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showListStatus, setListStatus] = useState(false)
  const handleCloseListStatus = () => setListStatus(false);
  const handleShowListStatus = () => setListStatus(true);

  // logout
  const logout = async () => {
    await props.doLogout()
    props.history.push("/login")
  }
  return (
    <div style={{ position: "fixed", width: `${(4 / 12 * 100)}%`, left: "0", right: `${4 / 12 * 100}%`, zIndex: "999" }}>
      <Navbar style={{ backgroundColor: "#ededed", height: "64px" }} className="p-0">

        {/* tombol profile */}
        <Nav.Link className="mr-auto" onClick={handleShow}>
          <i style={{ fontSize: "30px" }} md={2} className="fas fa-user-circle"></i>
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
            <div>{localStorage.getItem("username")}</div>
            <div style={{ backgroundColor: "#ededed" }}>This is not your username or pin. This name will be visible to your Whatsapp contacts</div>
            <div>about</div>
          </Modal.Body>
        </Modal>
        {/* end modal profile */}

        {/* start navbar status, new chat, setting */}
        <Nav className="ml-auto" style={{ color: "black" }}>
          {/* status */}
          <Nav.Link onClick={handleShowListStatus}>
            <i style={{ fontSize: "20px" }} className="fas fa-circle-notch"></i>
          </Nav.Link>

          {/* start modal list status */}
          <Modal dialogClassName="modal-status" show={showListStatus} onHide={handleCloseListStatus}>
            <ListStatus
              listStatus={props.listStatus}
              handleCloseListStatus={handleCloseListStatus} />
          </Modal>
          {/* end modal list status */}

          {/* new chat */}
          <Nav.Link>
            <i style={{ fontSize: "20px" }} className="fas fa-comment-dots"></i>
          </Nav.Link>

          {/* setting */}
          <OverlayTrigger trigger="click" placement="bottom" overlay={(
            <Popover id="popover-positioned-bottom">
              <Popover.Content>
                New Group
            </Popover.Content>
              <Popover.Content>
                Profile
            </Popover.Content>
              <Popover.Content>
                Archieved
            </Popover.Content>
              <Popover.Content>
                Starred
            </Popover.Content>
              <Popover.Content>
                Settings
            </Popover.Content>
              <Popover.Content onClick={() => logout()}>
                Log Out
            </Popover.Content>
            </Popover>
          )}>
            <Nav.Link>
              <i style={{ fontSize: "20px" }} className="fas fa-ellipsis-v"></i>
            </Nav.Link>
          </OverlayTrigger>

          {/* <Dropdown>
            <Dropdown.Toggle as="span">
              <i style={{ fontSize: "20px" }} className="fas fa-ellipsis-v"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                New Group
                </Dropdown.Item>
              <Dropdown.Item>
                Profile
                </Dropdown.Item>
              <Dropdown.Item>
                Archieved
                </Dropdown.Item>
              <Dropdown.Item>
                Starred
                </Dropdown.Item>
              <Dropdown.Item>
                Settings
                </Dropdown.Item>
              <Dropdown.Item onClick={() => logout()}>
                Log Out
                </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}

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