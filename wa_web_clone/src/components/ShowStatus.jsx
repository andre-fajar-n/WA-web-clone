import React, { Fragment } from "react"
import Modal from "react-bootstrap/Modal";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Carousel from 'react-bootstrap/Carousel'

const ShowStatus = (props) => {
  return (
    <Fragment>
      <Modal dialogClassName="modal-show-status" show={props.showStatus} onHide={props.handleCloseStatus}>
        <Navbar className="navbar-show-status">
          <Nav.Link style={{ color: "#ffffff" }} onClick={props.handleCloseStatus}>
            <i class="fas fa-arrow-left"></i>
          </Nav.Link>
          <Nav.Link style={{ color: "#ffffff" }} className="ml-auto" onClick={props.handleCloseStatus, props.handleCloseListStatus}>
            <i class="fas fa-times"></i>
          </Nav.Link>
        </Navbar>
        <Carousel className="each-status">
          <Carousel.Item>
            <img
              className="d-block"
              src={require("../logo.svg")}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={require("../logo.svg")}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={require("../logo.svg")}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Modal>
    </Fragment>
  )
}

export default ShowStatus;