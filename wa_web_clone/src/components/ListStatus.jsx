import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom"

const ListStatus = (props) => {
  return (
    <Row className="m-0">
      <Col md={4} className="p-0 header-status" >
        <Row className="m-0 navbar-status">
          <Col md={2} className="p-0">
            <i class="fas fa-user-circle"></i>
          </Col>
          <Col md={"auto"} className="p-0">
            <div>Nama</div>
            <div style={{ color: "hsla(0,0%,100%,0.55)" }}>Update Status</div>
          </Col>
        </Row>
        <div className="list-status">
          <hr style={{ borderTop: "1px solid hsla(0,0%,100%,0.55)" }} />
          <span style={{ color: "hsla(0,0%,100%,0.55)" }}>Recent</span>
          {['andre', 'bagas', 'sandro', 'fiya', 'ekky', 'fachrul', 'tanto', 'wildan', 'refky', 'fauzi', 'alief', 'nina', 'yayak'].map((item) => (
            <Link style={{ color: "hsla(0,0%,100%,0.55)" }}>
              <Row>
                <Col md={2} className="p-0">
                  <img className="avatar" src={require("../images/user.jpeg")} alt="" />
                </Col>
                <Col md={"auto"} className="p-0">
                  <div style={{ color: "#ffffff" }}>{item}</div>
                  <div>status</div>
                </Col>
              </Row>
            </Link>
          ))}
        </div>
      </Col>
      <Col md={8} className="p-0" style={{ backgroundColor: "#000000", color: "hsla(0,0%,100%,0.55)" }}>
        <div className="close-status">
          <Link style={{ color: "#ffffff" }} onClick={props.handleCloseListStatus}>
            <i class="fas fa-times"></i>
          </Link>
        </div>
        <div>
          <i class="fas fa-circle-notch"></i>
          <span>Click on contact to view their status updates</span>
        </div>
      </Col>
    </Row>
  )
}

export default ListStatus;