import React, { Component } from "react";
import background from "../../../Assets/img/hotel.jpeg";
class Card extends Component {
  render() {
    return (
      <div className="col-lg-6 py-3">
        <div className="th-card">
          <div
            className="th-card-img"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className="th-ribbon">
              <i className="las la-clock th-18 px-2"></i> {this.props.title}
            </div>
          </div>
          <div className="th-card-body p-4">
            <div className="row">
              <div className="col-md-12 th-34 th-black th-bold">
                <span className="">{this.props.hotel}</span>
              </div>
              <div className="col-md-12 th-18 th-grey">
                <p>{this.props.address}</p>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-8 py-2">
                <div className=" th-black th-20 th-bold ">
                  {this.props.price}
                </div>
                <div className="th-grey th-14 ">{this.props.span}</div>
              </div>
              <div className="col-md-4 py-2 d-sm-block d-none">
                <button type="submit" className="th-btn-solid">
                  {this.props.btn}
                </button>
              </div>
              {/* <!-- Mobile button only --> */}
              <div className="px-15 pt-2 d-sm-none">
                <button type="submit" className="th-btn-solid">
                  {this.props.btn}
                </button>
              </div>
              {/* <!-- Mobile button only end--> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
