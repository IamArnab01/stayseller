import React, { Component } from "react";
import Rates from "../../Assets/img/1.png";
import Pay from "../../Assets/img/pay.png";
import Wifi from "../../Assets/img/wifi.png";
class Amenities extends Component {
  render() {
    return (
      <div className="container">
        <div className="row th-mob-display py-1">
          <div className="col text-center py-3">
            <img src={Rates} width="30px" alt=" " />
            <div className="th-18 th-bold th-black pt-3">
              Best Rates Guaranteed
            </div>
          </div>
          <div className="col text-center py-3">
            <img src={Pay} width="30px" alt=" " />
            <div className="th-18 th-bold th-black pt-3">Pay at Hotel</div>
          </div>
          <div className="col text-center py-3">
            <img src={Pay} width="30px" alt=" " />
            <div className="th-18 th-bold th-black pt-3">No Hidden Charges</div>
          </div>
          <div className="col text-center py-3">
            <img src={Pay} width="30px" alt=" " />
            <div className="th-18 th-bold th-black pt-3">Exculsive Offers</div>
          </div>
          <div className="col text-center py-3">
            <img src={Wifi} width="30px" alt=" " />
            <div className="th-18 th-bold th-black pt-4">Wifi Access</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Amenities;
