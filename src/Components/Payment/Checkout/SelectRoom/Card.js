import React, { Component } from "react";
import Size from "../../../../Assets/img/size.png";
import King from "../../../../Assets/img/king.png";
import Car from "../../../../Assets/img/car.png";
import Wifi from "../../../../Assets/img/wifi2.png";
import { Modal } from "react-bootstrap";
import ChangeRoom from "../../../Popup/ChangeRoom/ChangeRoom";

class Card extends Component {
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
        <div className="container px-30 pt-4">
          <div className="row th-card">
            <div className="col-md-12 th-bg-grey">
              <div className="row py-2 d-sm-flex d-none">
                <div className="col-lg-3 th-36 th-bold th-black">
                  {this.props.title}
                </div>
                <div className="col-lg-3">
                  {/* modal toggle */}
                  <button
                    type="submit"
                    className="th-btn-trans my-2"
                    onClick={this.handleShow}
                  >
                    {this.props.btn}
                  </button>
                </div>
                <div className="col-lg-3">
                  <div className="th-14 th-lt-grey text-uppercase">
                    {this.props.guest}
                  </div>
                  <div className="th-lt-black th-18 th-bold">
                    {this.props.adult} {this.props.child}
                  </div>
                </div>
                <div
                  className="col-lg-3  th-black th-bold th-36"
                  style={{ textAlign: "right" }}
                >
                  {this.props.price}
                </div>
              </div>

              {/* for mobile only */}
              <div className="row py-2 d-sm-none ">
                <div className="col-lg-3 th-36 th-bold th-black">
                  Superior Room
                </div>
                <div className="col-lg-3">
                  <div className="th-14 th-lt-grey text-uppercase">Guests</div>
                  <div className="th-lt-black th-18 th-bold">
                    {this.props.adult} {this.props.child}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row align-items-center">
                    <div className="col">
                      <div className=" th-black th-bold th-24">
                        {" "}
                        {this.props.price}
                      </div>
                    </div>
                    <div className="col">
                      <button
                        type="submit"
                        className="th-btn-trans my-2"
                        style={{ padding: "10px 12px" }}
                        onClick={this.handleShow}
                      >
                        {this.props.btn}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* for mobile only end */}
            <div className="col-md-12 ">
              <div className="row th-bg-white py-4 px-2">
                <div className="th-18 col-lg-6 col-sm-12 th-grey comment more">
                  {this.props.content}
                </div>
                <div className="th-18 th-grey col-sm-12 th-bold col-lg-2 offset-lg-4">
                  {this.props.room} {this.props.timing}
                </div>
              </div>

              <div className="row py-2 px-2">
                <div className="th-14 col-lg-12">
                  <img
                    src={Size}
                    className="img-icon-details "
                    style={{ width: "12px" }}
                    alt=" "
                  />
                  <span className="px-2">{this.props.facility1}</span>
                  <img
                    src={King}
                    className="img-icon-details ml-3"
                    style={{ width: "12px" }}
                    alt=" "
                  />
                  <span className="px-2">{this.props.facility2}</span>
                  <img
                    src={Car}
                    className="img-icon-details ml-3"
                    style={{ width: "12px" }}
                    alt=" "
                  />
                  <span className="px-2">{this.props.facility3}</span>
                  <img
                    src={Wifi}
                    className="img-icon-details ml-2"
                    style={{ width: "12px" }}
                    alt=" "
                  />
                  <span className="px-2">{this.props.facility4}</span>
                </div>
              </div>
              <div className="row py-3 pb-4 px-2">
                <div className="col">
                  <div className="radio-item th-18 ">
                    <input
                      type="radio"
                      id="ritemb"
                      name="ritem"
                      value="ropt2"
                    />
                    <label for="ritemb">{this.props.radioBtn}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* modal */}
        <Modal show={this.state.show} size="lg" onHide={this.handleClose}>
          <Modal.Body>
            <ChangeRoom show={this.state.show} />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Card;
