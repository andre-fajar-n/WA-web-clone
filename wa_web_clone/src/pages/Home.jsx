import React, { Component, Fragment } from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavbarChat from "../components/NavbarChat"
import NavbarProfile from "../components/NavbarProfile"
import ListChat from "../components/ListChat"
import Chat from "../components/Chat"
import Nav from "react-bootstrap/Nav"
import Tab from 'react-bootstrap/Tab'
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { getConversation } from "../store/action/chat"

class Home extends Component {
  componentDidMount = async () => {
    await this.props.getConversation()
  }
  render() {
    console.warn("cek di home", this.props.listConversation)
    const listConversation = this.props.listConversation
    return (
      <Fragment>
        {this.props.dataUser.isLogin ? (
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={4} className="p-0">
                {/* header menu profile */}
                <NavbarProfile />

                {/* (start) Menampilkan list chat */}
                <Nav variant="pills" className="flex-column">
                  <div id="box-list-chat" style={{ marginTop: "110px" }}>
                    {listConversation.map((value) => (
                      <Nav.Item>
                        <ListChat value={value} biodata={this.props.dataUser.biodata} />
                      </Nav.Item>
                    ))}
                  </div>
                </Nav>
                {/* (end) Menampilkan list chat */}

              </Col>
              <Col sm={8} className="p-0">

                <Tab.Content>
                  {/* (start) tampilan di box kanan sebelum klik chat */}
                  <Tab.Pane eventKey="first">
                    <div className="connected-wa">
                      <img src={require("../images/whatsapp-icon-logo.png")} alt="" />
                      <h1>Keep your phone connected</h1>
                      <span>Whatsapp connect to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi</span>
                    </div>
                  </Tab.Pane>
                  {/* (end) tampilan di box kanan sebelum klik chat */}

                  {/* (start) menampilkan isi chat */}
                  {listConversation.map((item) => (
                    <Tab.Pane eventKey={`${item.data_user.username}`}>
                      <NavbarChat item={item} />
                      <div id="box-chat">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((value) => (
                          <Chat value={value} />
                        ))}
                      </div>
                    </Tab.Pane>
                  ))}
                  {/* (end) menampilkan isi chat */}

                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        ) : (
            <Redirect to={{ pathname: "/login" }} />
          )}
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  dataUser: state.user,
  listConversation: state.chat.listConversation
})

const mapDispatchToProps = {
  getConversation,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);