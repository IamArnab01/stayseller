import React, { Component } from "react";
import Hotel from "../../../Assets/img/header.png";
class ImgModal extends Component {
  render() {
    return (
      <div>
        <div className="col-lg-12">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="th-24 th-black th-bold">View Photo</div>
            {/* <div className="th-close-img th-black">&times;</div> */}
          </div>
        </div>

        <div
          className="row th-20 th-medium th-black"
          style={{ overflowY: "scroll", height: "80vh" }}
        >
          <div className="col-sm-12 py-2">
            <div
              className="th-mob-scroll-img"
              style={{ backgroundImage: `url(${Hotel})` }}
            ></div>
          </div>
          <div className="col-sm-12 py-2">
            <div
              className="th-mob-scroll-img"
              style={{ backgroundImage: `url(${Hotel})` }}
            ></div>
          </div>
          <div className="col-sm-12 py-2">
            <div
              className="th-mob-scroll-img"
              style={{ backgroundImage: `url(${Hotel})` }}
            ></div>
          </div>
          <div className="col-sm-12 py-2">
            <div
              className="th-mob-scroll-img"
              style={{ backgroundImage: `url(${Hotel})` }}
            ></div>
          </div>
          <div className="col-sm-12 py-2">
            <div
              className="th-mob-scroll-img"
              style={{ backgroundImage: `url(${Hotel})` }}
            ></div>
          </div>
          <div className="col-sm-12 py-2">
            <div
              className="th-mob-scroll-img"
              style={{ backgroundImage: `url(${Hotel})` }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImgModal;
