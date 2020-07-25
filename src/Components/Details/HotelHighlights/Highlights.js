import React, { Component } from "react";
import ScrollBar from "./ScrollBar";
import Grid from "./Grid";
import Size from "../../../Assets/img/size.png";
import Car from "../../../Assets/img/car.png";
import King from "../../../Assets/img/king.png";
import Wifi from "../../../Assets/img/wifi.png";
import AC from "../../../Assets/img/ac.png";
import Food from "../../../Assets/img/food.png";
import Swim from "../../../Assets/img/swim.png";
import { Modal } from "react-bootstrap";
import Amenities from "../../Popup/DetailPage/Amenities";
class Highlights extends Component {
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
        <div className="container th-card">
          <div className="row ">
            <div className="col-lg-6 p-4">
              <div className="th-30 th-black th-bold py-2">
                Taj Jumeirah Lakes Towers
              </div>
              <div className="th-14 th-orange th-bold py-1">
                <i className="fa fa-phone th-18 pr-2"></i>
                <u>Apollo Bunder , Mumbai , 400 001</u>
              </div>
              <div className="th-14 th-grey th-bold py-1">
                <i className="fa fa-phone th-18 pr-2"></i>+91-9472394068
              </div>
              <div className="th-14 th-orange th-bold py-1">
                <i className="fa fa-envelope th-18 pr-2"></i>
                <u>Vivek.anand2805@gmail.com</u>
              </div>
              <div className="th-18 th-grey py-1 comment more-orange">
                Blending subtle colours and modern design elements, the Superior
                Rooms feature Kin...
              </div>

              <div className="th-24 th-bold th-black py-3">
                Hotel Highlights
              </div>
              <div className="py-1">
                <img src={Size} className="img-icon-details" alt=" " />
                <span className="th-18 th-grey pl-2">Avant-garde design</span>
              </div>
              <div className="py-1">
                <img src={Car} className="img-icon-details" alt=" " />
                <span className="th-18 th-grey pl-2">
                  Perfect countryside resort
                </span>
              </div>
              <div className="py-1">
                <img src={King} className="img-icon-details" alt=" " />
                <span className="th-18 th-grey pl-2">
                  View of the Aravalli mountains
                </span>
              </div>
              <div className="py-1">
                <img src={Wifi} className="img-icon-details" alt=" " />
                <span className="th-18 th-grey pl-2">
                  Great for weekend getaways & weddings
                </span>
              </div>
              <div className="th-24 th-bold th-black py-3">
                Hotel Highlights
              </div>
              <div className="d-sm-flex justify-content-between col-lg-10 px-0">
                <div>
                  <img src={AC} className="img-icon-details" alt=" " />
                  <span className="pl-2">AC</span>
                </div>
                <div>
                  <img src={Food} className="img-icon-details" alt=" " />
                  <span className="pl-2">Room Service</span>
                </div>
                <div>
                  <img src={Swim} className="img-icon-details" alt=" " />
                  <span className="pl-2">Swimming Pool</span>
                </div>
              </div>
              <label
                className="py-3 th-bold th-18 th-orange "
                style={{ cursor: "pointer" }}
                onClick={this.handleShow}
                // modal toggle
              >
                View all
              </label>
              <div className="th-24 th-bold th-black py-2">
                Hotel Highlights
              </div>
              <div className="th-18 th-grey">
                Check-in from 2:00 PM
                <br />
                Check-out till 12:00 PM
                <br />
                Early check-in and late check-out on request
                <br />
                We accept American Express, Diner's Club, Master Card, Visa, JCB
                International
                <br />
                Pets are not allowed
              </div>
            </div>
            {/* image grid */}
            <Grid />
          </div>
          {/*  Mobile scroll bar  */}
          <ScrollBar />
        </div>
        <Modal show={this.state.show} size="lg" onHide={this.handleClose}>
          <Modal.Body>
            <Amenities show={this.state.show} />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Highlights;
