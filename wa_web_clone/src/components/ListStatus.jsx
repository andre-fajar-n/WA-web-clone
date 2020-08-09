import React, { useState, Fragment } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom"
import ShowStatus from "./ShowStatus"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const ListStatus = (props) => {
  const [showStatus, setStatus] = useState(false)
  const handleCloseStatus = () => setStatus(false);
  const handleShowStatus = () => setStatus(true);

  const handleModal = props.listStatus.map((value) => {
    value[`handle_modal_${value.username}`] = {
      showStatus,
      handleShowStatus,
      handleCloseStatus
    }
    return value
  })
  console.warn('cek handle modal', handleModal)
  return (
    <Row className="m-0">
      <Col md={4} className="p-0 header-status" >
        <Row className="m-0 navbar-status">

          <Col md={2} className="p-0">
            <i className="fas fa-user-circle"></i>
          </Col>

          <Col md={"auto"} className="p-0">
            <div>My Status</div>
            <div style={{ color: "hsla(0,0%,100%,0.55)" }}>Update Status</div>
          </Col>
        </Row>
        <div className="list-status">
          <hr style={{ borderTop: "1px solid hsla(0,0%,100%,0.55)" }} />
          <span style={{ color: "hsla(0,0%,100%,0.55)" }}>Recent</span>
          {handleModal.map((item) => (
            <Fragment>

              {/* start list status */}
              <Link onClick={item[`handle_modal_${item.username}`]['handleShowStatus']} style={{ color: "hsla(0,0%,100%,0.55)" }}>
                <Row>
                  <Col md={2} className="p-0">
                    <img className="avatar" src={require("../images/user.jpeg")} alt="" />
                  </Col>
                  <Col md={"auto"} className="p-0">
                    <div style={{ color: "#ffffff" }}>{item.username}</div>
                    <div>status</div>
                  </Col>
                </Row>
              </Link>
              {/* end list status */}

              {/* start modal show status */}
              <ShowStatus
                username={item.username}
                item={item}
                allStatus={item.all_status}
              // handleCloseStatus={handleCloseStatus}
              // handleCloseListStatus={props.handleCloseListStatus}
              // showStatus={showStatus}
              />
              {/* end modal show status */}

            </Fragment>
          ))}
        </div>
      </Col>
      <Col md={8} className="p-0" style={{ backgroundColor: "#000000", color: "hsla(0,0%,100%,0.55)" }}>

        {/* start tombol close modal status */}
        <Navbar className="close-status">
          <Nav.Link className="ml-auto" style={{ color: "#ffffff" }} onClick={props.handleCloseListStatus}>
            <i className="fas fa-times"></i>
          </Nav.Link>
        </Navbar>
        {/* end tombol close modal status */}

        <div className="blank-status">
          <i style={{ fontSize: "50vh" }} className="fas fa-circle-notch"></i><br />
          <span>Click on contact to view their status updates</span>
        </div>
      </Col>
    </Row>
  )
}

export default ListStatus;