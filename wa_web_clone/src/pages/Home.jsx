import React, { Component, Fragment } from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavbarProfile from "../components/NavbarProfile"
import ListChat from "../components/ListChat"
import Nav from "react-bootstrap/Nav"
import Tab from 'react-bootstrap/Tab'
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { sendMessage, changeInputMessage, deleteMessage, getAllMessage } from "../store/action/chat"
import { getStatus } from "../store/action/status"
import ShowTabChat from "../components/ShowTabChat"

class Home extends Component {
  componentDidMount = async () => {
    await this.props.getAllMessage()
    await this.props.getStatus()

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

  // fungsi auto scroll paling bawah
  scrollBottom = () => {
    const autoBottom = document.getElementById('box-chat')
    if (autoBottom) {
      autoBottom.scrollTop = autoBottom.scrollHeight
    }
  }

  render() {
    const listAllMessage = this.props.listAllMessage
    return (
      <Fragment>
        {this.props.dataUser.isLogin ? (
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={4} className="p-0">
                {/* header menu profile */}
                <NavbarProfile
                  dataUser={this.props.dataUser}
                  listStatus={this.props.listStatus} />

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
                      {/* show tab chat */}
                      <ShowTabChat item={item} />

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
  listStatus: state.status.listStatus,
})

const mapDispatchToProps = {
  sendMessage,
  changeInputMessage,
  deleteMessage,
  getAllMessage,
  getStatus,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);