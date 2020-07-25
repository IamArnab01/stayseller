import React, { Component } from "react";
import Hotel from "../../../Assets/img/header.png";
import { Modal } from "react-bootstrap";
import ImgModal from "../../Popup/DetailPage/Modal";

class ScrollBar extends Component {
  state = {
    show: false,
  };

  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  handleClose = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div>
        <div className="d-sm-none" style={{ padding: "10px" }}>
          <div className="mob-scroll-bar ">
            <div>
              <div
                className="th-mob-scroll-img"
                style={{ backgroundImage: `url(${Hotel})` }}
              ></div>
            </div>
            <div>
              <div
                className="th-mob-scroll-img"
                style={{ backgroundImage: `url(${Hotel})` }}
              ></div>
            </div>
            {/* <div>
              <div
                className="th-mob-scroll-img"
                style={{ backgroundImage: `url(${Hotel})` }}
              ></div>
            </div> */}
            {/* <div>
              <div
                className="th-mob-scroll-img"
                style={{ backgroundImage: `url(${Hotel})` }}
              ></div>
            </div> */}
          </div>

          {/*  Modal */}
          <div
            className="py-3 th-bold th-18 th-orange "
            // toggle modal
            onClick={this.handleShow}
            style={{ cursor: "pointer" }}
          >
            View Photo
          </div>
        </div>
        <Modal show={this.state.show} size="lg" onHide={this.handleClose}>
          <Modal.Body>
            <ImgModal show={this.state.show} />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default ScrollBar;
