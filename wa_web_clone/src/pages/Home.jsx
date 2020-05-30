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
import { sendMessage, changeInputMessage, deleteMessage, getAllMessage } from "../store/action/chat"
import Form from "react-bootstrap/Form"

class Home extends Component {
  componentDidMount = async () => {
    await this.props.getAllMessage()

    // posisi scroll chat auto dari bawah
    this.scrollBottom()
  }

  postAfterSendMessage = async (id, username) => {
    await this.props.sendMessage(id, username)
    await this.props.history.replace('/')
    await this.props.getAllMessage()

    this.scrollBottom()
    this.inputReset()
  }

  inputReset = () => {
    const inputMessage = document.getElementById("sendMessage")
    inputMessage.value = ""
  }

  scrollBottom = () => {
    const autoBottom = document.getElementById('box-chat')
    if (autoBottom) {
      autoBottom.scrollTop = autoBottom.scrollHeight
    }
  }

  render() {
    let username = ""
    let type_chat = ''
    const listAllMessage = this.props.listAllMessage
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
                    {listAllMessage.map((value, id) => (
                      <Nav.Item key={id} >
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

                  {/* start loop tampilan chat */}
                  {listAllMessage.map((item) => (
                    <Fragment>
                      {/* {console.warn("cek loop", typeof (item.info_chat.username))} */}
                      {typeof (item.info_chat.username) == "string" ? (
                        username = item.info_chat.username
                      ) : (
                          username = item.info_chat.name
                        )}
                      <Tab.Pane eventKey={`${username}`}>
                        <NavbarChat item={item} />

                        {/* (start) menampilkan isi chat */}
                        <div id="box-chat">
                          {item.all_chat.map((value, index) => (
                            <Chat
                              key={index}
                              {...this.props}
                              value={value} />
                          ))}
                        </div>
                        {/* (end) menampilkan isi chat */}

                        <Form.Group onSubmit={(e) => e.preventDefault()} style={{ backgroundColor: "#f7f7f7", padding: "10px 0", margin: "0" }}>
                          <Row>
                            <Col sm={1} className="p-0 m-auto" style={{ textAlign: "center" }}>
                              <i className="far fa-grin" style={{ fontSize: "30px" }}></i>
                            </Col>
                            <Col sm={9} className="p-0">
                              <Form.Control
                                onChange={(e) => this.props.changeInputMessage(e)}
                                name="message"
                                type="text"
                                id="sendMessage"
                                placeholder="Type a message"
                                style={{ borderRadius: "50px" }}>
                              </Form.Control>
                            </Col>
                            <Col sm={1} className="p-0 m-auto" style={{ textAlign: "center" }}>
                              <i onClick={() => this.postAfterSendMessage(item.info_chat.id, item.info_chat.username)} className="far fa-paper-plane" style={{ fontSize: "30px" }}></i>
                            </Col>
                            <Col sm={1} className="p-0 m-auto" style={{ textAlign: "center" }}>
                              <i className="fas fa-microphone" style={{ fontSize: "30px" }}></i>
                            </Col>
                          </Row>
                        </Form.Group>
                      </Tab.Pane>
                    </Fragment>
                  ))}
                  {/* end loop tampilan chat */}
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
  listAllMessage: state.chat.listAllMessage,
})

const mapDispatchToProps = {
  sendMessage,
  changeInputMessage,
  deleteMessage,
  getAllMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);