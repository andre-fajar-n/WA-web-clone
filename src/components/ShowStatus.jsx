import React, { Fragment } from "react"
import Modal from "react-bootstrap/Modal";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Carousel from 'react-bootstrap/Carousel'

const ShowStatus = (props) => {
  console.warn("cek show status", props['item'][`handle_modal_${props.username}`]['handleCloseStatus'])
  return (
    <Fragment>
      <Modal
        dialogClassName="modal-show-status"
      // show={props['item'][`handle_modal_${props.username}`]['showStatus']}
      // onHide={props['item'][`handle_modal${props.username}`]['handleCloseStatus']}
      >
        <Navbar className="navbar-show-status">
          <Nav.Link style={{ color: "#ffffff" }}
          // onClick={props['item'][`handle_modal${props.username}`]['handleCloseStatus']}
          >
            <i className="fas fa-arrow-left"></i>
          </Nav.Link>
          <Nav.Link style={{ color: "#ffffff" }}
            className="ml-auto"
          // onClick={props['item'][`handle_modal${props.username}`]['handleCloseStatus'], props.handleCloseListStatus}
          >
            <i className="fas fa-times"></i>
          </Nav.Link>
        </Navbar>
        <Carousel className="each-status">
          {props.allStatus.map((item) => (
            // <Fragment>
            <Carousel.Item>
              {/* {item.image === "" || item.image === null ? (
                  <Fragment></Fragment>
                ) : (
                  )} */}
              <img
                className="d-block"
                src={require("../logo.svg")}
                alt={`${item.image}`}
              />
              <Carousel.Caption>
                <h3>{props.username}</h3>
                <p>{item.content}</p>
              </Carousel.Caption>
            </Carousel.Item>
            // </Fragment>
          ))}
          {/* <Carousel.Item>
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
          </Carousel.Item> */}
        </Carousel>
      </Modal>
    </Fragment >
  )
}

export default ShowStatus;