import React, { Component, Fragment } from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavbarChat from "../components/NavbarChat"
import NavbarProfile from "../components/NavbarProfile"
import ListChat from "../components/ListChat"
import Chat from "../components/Chat"
import Nav from "react-bootstrap/Nav"
import Tab from 'react-bootstrap/Tab'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={4} className="p-0">
              <NavbarProfile />
              <Nav variant="pills" className="flex-column">
                <div id="box-list-chat" style={{ marginTop: "110px" }}>
                  {['andrefn', 'andren', 'romli', 'aisyah', 'oci', 'shofi', 'bagas', 'sholeh', 'derby', 'aji', 'yopi', 'rizal', 'agus', 'alul'].map((value) => (
                    <Nav.Item>
                      <ListChat value={value} />
                    </Nav.Item>
                  ))}
                </div>
                {/* <Nav.Link eventKey="first">Tab 1</Nav.Link>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item> */}
              </Nav>
            </Col>
            <Col sm={8} className="p-0">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className="connected-wa">
                    <img src={require("../images/whatsapp-icon-logo.png")} alt="" />
                    <h1>Keep your phone connected</h1>
                    <span>Whatsapp connect to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi</span>
                  </div>
                </Tab.Pane>
                {['andrefn', 'andren', 'romli', 'aisyah', 'oci', 'shofi', 'bagas', 'sholeh', 'derby', 'aji', 'yopi', 'rizal', 'agus', 'alul'].map((item) => (
                  <Tab.Pane eventKey={`${item}-name`}>
                    <NavbarChat item={item} />
                    <div id="box-chat">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((value) => (
                        <Chat value={value} />
                      ))}
                    </div>
                  </Tab.Pane>
                ))}
                {/* <Chat />
                <Tab.Pane eventKey="2-name">
                  <ListChat />
                </Tab.Pane> */}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        {/* <Container fluid className="p-0">
          <Row>
            <Col sm={4} className="p-0">
              <NavbarProfile />
              <div id="box-list-chat" style={{ marginTop: "110px" }}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <ListChat value={value} />
                ))}
              </div>
            </Col>
            <Col sm={8} className="p-0">
              <NavbarChat />
              <div id="box-chat">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((value) => (
                  <Chat value={value} />
                ))}
              </div>
            </Col>
          </Row>
        </Container> */}
      </Fragment>
    )
  }
}

export default Home;