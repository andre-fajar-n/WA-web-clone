import React, { Component, Fragment } from "react"
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link, Redirect } from "react-router-dom";
import { changeInputUser, register } from "../store/action/user";
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button'

class Register extends Component {
  postRegister = async () => {
    await this.props.register()
    if (localStorage.getItem("token") !== null) {
      this.props.history.push("/")
    }
  }
  render() {
    return (
      <Fragment>
        {localStorage.getItem("token") !== null ? (
          <Redirect to={{ pathname: "/WA-web-clone" }} />
        ) : (
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
                      <Form.Control name="registerUsername" type="text" placeholder="Username" onChange={(e) => this.props.changeInputUser(e)} />
                    </Col>
                    <Col sm="1"></Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formPlaintextPhoneNumber">
                    <Col sm="1"></Col>
                    <Form.Label column sm="2">Phone Number</Form.Label>
                    <Col sm="8">
                      <Form.Control name="registerPhoneNumber" type="text" placeholder="Phone Number" onChange={(e) => this.props.changeInputUser(e)} />
                    </Col>
                    <Col sm="1"></Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Col sm="1"></Col>
                    <Form.Label column sm="2">Password</Form.Label>
                    <Col sm="8">
                      <Form.Control name="registerPassword" type="password" placeholder="Password" onChange={(e) => this.props.changeInputUser(e)} />
                    </Col>
                    <Col sm="1"></Col>
                  </Form.Group>
                  <Button as="input" type="submit" value="Register" onClick={() => this.postRegister()} />{' '}
                </Form>
                <div style={{ textAlign: "center" }}>
                  <span>Have an account? <Link className="switch-link" to="/login">Click here!</Link></span>
                </div>
              </div>
            </div>
          )}
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  dataUser: state.user
})

const mapDispatchToProps = {
  changeInputUser,
  register
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);