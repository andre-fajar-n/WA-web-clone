import React, { Component, Fragment } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavbarChat from "../components/NavbarChat"
import NavbarProfile from "../components/NavbarProfile"

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid className="p-0">
          <Row>
            <Col sm={4} className="p-0">
              <NavbarProfile />
            </Col>
            <Col sm={8} className="p-0">
              <NavbarChat />
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Home;