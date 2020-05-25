import React, { Component, Fragment } from "react"
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <Fragment>
        <div className="background">
          <div className="header-wa-web">
            <div style={{ padding: "27px auto 28px", margin: "auto", maxWidth: "1000px" }}>
              <img className="logo-wa-web" src={require("../images/whatsapp-icon-logo.png")} alt="" />
              <span>WHATSAPP WEB</span>
            </div>
          </div>
          <div className="window-wa-web container">
            <h1 style={{ textAlign: "center" }}>REGISTER</h1><br />
            <Form>
              <Form.Group as={Row} controlId="formPlaintextUsername">
                <Col sm="1"></Col>
                <Form.Label column sm="2">Username</Form.Label>
                <Col sm="8">
                  <Form.Control type="text" placeholder="Username" />
                </Col>
                <Col sm="1"></Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextPhoneNumber">
                <Col sm="1"></Col>
                <Form.Label column sm="2">Phone Number</Form.Label>
                <Col sm="8">
                  <Form.Control type="text" placeholder="Phone Number" />
                </Col>
                <Col sm="1"></Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Col sm="1"></Col>
                <Form.Label column sm="2">Password</Form.Label>
                <Col sm="8">
                  <Form.Control type="password" placeholder="Password" />
                </Col>
                <Col sm="1"></Col>
              </Form.Group>
            </Form>
            <div style={{ textAlign: "center" }}>
              <span>Have an account? <Link to="/login">Click here!</Link></span>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Register;