import React from "react"
import Nav from "react-bootstrap/Nav"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const ListChat = (props) => {
  return (
    <div>
      <Nav.Link eventKey={`${props.value}-name`} style={{ width: "100%" }} className="p-0">
        <Row className="m-0">
          <Col md={2}><i className="fas fa-user-circle"></i></Col>
          <Col md={10} className="p-0">
            <Row className="m-0">
              <Col className="p-0">{props.value}</Col>
              <Col className="p-0">Datetime chat</Col>
            </Row>
            <Row className="m-0">Last chat</Row>
          </Col>
        </Row>
      </Nav.Link>
      <hr />
    </div>
  )
}

export default ListChat;