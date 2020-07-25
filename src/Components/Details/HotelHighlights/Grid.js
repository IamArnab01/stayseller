import React, { Component } from "react";
import Aux from "../../../hoc/Aux";
import Hotel from "../../../Assets/img/header.png";
class Grid extends Component {
  render() {
    return (
      <Aux>
        <div
          className="col-lg-6 px-5 pt-5  d-sm-block d-none"
          style={{ maxHeight: "90vh", overflowY: "scroll" }}
        >
          <div className="row">
            <div className="col-md-6 py-2">
              <div
                className="th-scroll-img img-border-radius"
                style={{ backgroundImage: `url(${Hotel})` }}
              ></div>
            </div>
            <div className="col-md-6 py-2">
              <div
                className="th-scroll-img img-border-radius"
                style={{ backgroundImage: `url(${Hotel})` }}
              ></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 py-2">
              <div
                className="th-scroll-img img-border-radius"
                style={{ backgroundImage: `url(${Hotel})` }}
              ></div>
            </div>
            <div className="col-md-6 py-2">
              <div
                className="th-scroll-img img-border-radius"
                style={{ backgroundImage: `url(${Hotel})` }}
              ></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 py-2">
              <div
                className="th-scroll-img img-border-radius"
                style={{ backgroundImage: `url(${Hotel})` }}
              ></div>
            </div>
            <div className="col-md-6 py-2">
              <div
                className="th-scroll-img img-border-radius"
                style={{ backgroundImage: `url(${Hotel})` }}
              ></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 py-2">
              <div
                className="th-scroll-img img-border-radius"
                style={{ backgroundImage: `url(${Hotel})` }}
              ></div>
            </div>
            <div className="col-md-6 py-2">
              <div
                className="th-scroll-img img-border-radius"
                style={{ backgroundImage: `url(${Hotel})` }}
              ></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 py-2">
              <div
                className="th-scroll-img img-border-radius"
                style={{ backgroundImage: `url(${Hotel})` }}
              ></div>
            </div>
            <div className="col-md-6 py-2">
              <div
                className="th-scroll-img img-border-radius"
                style={{ backgroundImage: `url(${Hotel})` }}
              ></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 py-2">
              <div
                className="th-scroll-img img-border-radius"
                style={{ backgroundImage: `url(${Hotel})` }}
              ></div>
            </div>
            <div className="col-md-6 py-2">
              <div
                className="th-scroll-img img-border-radius"
                style={{ backgroundImage: `url(${Hotel})` }}
              ></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 py-2">
              <div
                className="th-scroll-img img-border-radius"
                style={{ backgroundImage: `url(${Hotel})` }}
              ></div>
            </div>
            <div className="col-md-6 py-2">
              <div
                className="th-scroll-img img-border-radius"
                style={{ backgroundImage: `url(${Hotel})` }}
              ></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 py-2">
              <div
                className="th-scroll-img img-border-radius"
                style={{ backgroundImage: `url(${Hotel})` }}
              ></div>
            </div>
            <div className="col-md-6 py-2">
              <div
                className="th-scroll-img img-border-radius"
                style={{ backgroundImage: `url(${Hotel})` }}
              ></div>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default Grid;
