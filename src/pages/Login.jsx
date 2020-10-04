import React, { Component, Fragment } from "react"
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { doLogin, changeInputUser } from "../store/action/user";
import Button from 'react-bootstrap/Button'

class Login extends Component {
  postLogin = async () => {
    await this.props.doLogin()
    if (localStorage.getItem("token") !== null) {
      this.props.history.push("/")
      // return <Redirect to="/" />
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
                <h1 style={{ textAlign: "center" }}>LOGIN</h1><br />
                <Form onSubmit={(e) => e.preventDefault()}>
                  <Form.Group as={Row} controlId="formPlaintextPhoneNumber">
                    <Col sm="1"></Col>
                    <Form.Label column sm="2">Phone Number</Form.Label>
                    <Col sm="8">
                      <Form.Control name="loginPhoneNumber" type="text" placeholder="Phone Number" onChange={(e) => this.props.changeInputUser(e)} />
                    </Col>
                    <Col sm="1"></Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Col sm="1"></Col>
                    <Form.Label column sm="2">Password</Form.Label>
                    <Col sm="8">
                      <Form.Control name="loginPassword" type="password" placeholder="Password" onChange={(e) => this.props.changeInputUser(e)} />
                    </Col>
                    <Col sm="1"></Col>
                  </Form.Group>
                  <Button as="input" type="submit" value="Login" onClick={() => this.postLogin()} />{' '}
                </Form>
                <div style={{ textAlign: "center" }}>
                  <span>Don't have an account? <Link className="switch-link" to="/WA-web-clone/register">Click here!</Link></span>
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
  doLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);