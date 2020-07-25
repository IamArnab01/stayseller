import React, { Component } from "react";
import Image from "../../../Assets/img/img3.png";
import Size from "../../../Assets/img/size.png";
import King from "../../../Assets/img/king.png";
import Car from "../../../Assets/img/car.png";
import Wifi from "../../../Assets/img/wifi2.png";
import Detail from "./RoomDetail";
import data from "./DetailData";
class Card extends Component {
  state = {
    show: false,
  };

  toggleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div>
        <div className="py-4">
          <div className="row th-card align-items-center">
            <div className="col-lg-4 pr-0 pl-0">
              <div
                className="th-card-img"
                style={{ backgroundImage: `url(${Image})` }}
              >
                <div className="th-ribbon">
                  <i className="las la-clock th-18 px-1"></i>
                  {this.props.tag1}
                  {this.props.date}
                </div>
                <br />
                <br />
                <div className="th-ribbon mt-1">{this.props.tag2}</div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="th-card-body py-2 px-1">
                <div className="row px-10">
                  <div className="th-14">
                    <img
                      src={Size}
                      className="img-icon-details ml-2"
                      style={{ width: "12px" }}
                      alt=""
                    />
                    <span className="px-2">{this.props.span1}</span>
                    <img
                      src={King}
                      className="img-icon-details ml-3"
                      style={{ width: "12px" }}
                      alt=""
                    />
                    <span className="px-2">{this.props.span2}</span>
                    <img
                      src={Car}
                      className="img-icon-details ml-3"
                      style={{ width: "12px" }}
                      alt=""
                    />
                    <span className="px-2">{this.props.span3}</span>
                    <img
                      src={Wifi}
                      className="img-icon-details ml-2"
                      style={{ width: "12px" }}
                      alt=""
                    />
                    <span className="px-2">{this.props.span4}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 th-32 th-black th-bold">
                    <span className="">{this.props.supRoom}</span>
                  </div>
                  <div className="col-md-8 th-16 th-grey pt-1 comment more">
                    {this.props.para}
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-9 py-2">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="radio-item th-18">
                          <input type="radio" />
                          <label for="test1">{this.props.option1}</label>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="radio-item th-18 ">
                          <input type="radio" />
                          <label for="test2">{this.props.option2}</label>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center px-10 d-sm-block d-none">
                      <div className="">
                        <span className="th-black th-32 th-bold">
                          {this.props.price}
                        </span>
                        <span className="th-grey th-18 th-strike px-1">
                          {this.props.oldPrice}
                        </span>
                        <span className="th-grey th-18 th-bold px-1">
                          {this.props.room} {this.props.stay}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 d-sm-block d-none">
                    <div>
                      <button
                        type="submit"
                        className="th-btn-trans my-2"
                        onClick={this.toggleShow}
                      >
                        {this.props.btn1}
                      </button>
                    </div>
                    <div>
                      <button type="submit" className="th-btn-solid my-2">
                        {this.props.btn2}
                      </button>
                    </div>
                  </div>
                  {/* <!-- Mobile responsive --> */}
                  <div className="container d-sm-none">
                    <div className="row ">
                      <div className="col">
                        <div className="th-black th-24 th-bold">
                          {this.props.price}{" "}
                        </div>
                        <div className="th-grey th-18 th-strike">
                          {this.props.oldPrice}
                        </div>
                      </div>
                      <div className=" col" style={{ textAlign: "right" }}>
                        <div className="th-grey th-18 th-bold ">
                          {this.props.room} {this.props.stay}
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center py-1">
                      <div className="col">
                        <div>
                          <button type="submit" className="th-btn-solid my-2">
                            {this.props.btn1}
                          </button>
                        </div>
                      </div>
                      <div className="col">
                        <div>
                          <button
                            type="submit"
                            className="th-btn-trans "
                            style={{ padding: "10px 12px" }}
                            onClick={this.toggleShow}
                          >
                            {this.props.btn2}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Mobile responsive End --> */}
                </div>
              </div>
            </div>

            {/* toogle room detail */}
            {this.state.show ? (
              <Detail
                header={data.header}
                content={data.content}
                other={data.other}
                conv1={data.conv1}
                conv2={data.conv2}
                conv3={data.conv3}
                conv4={data.conv4}
                conv5={data.conv5}
                conv6={data.conv6}
                conv7={data.conv7}
                conv8={data.conv8}
                conv9={data.conv9}
                conv10={data.conv10}
                conv11={data.conv11}
                conv12={data.conv12}
                conv13={data.conv13}
                conv14={data.conv14}
                amenity1={data.amenity1}
                feature1={data.feature1}
                amenity2={data.amenity2}
                feature2={data.feature2}
                amenity3={data.amenity3}
                feature3={data.feature3}
                amenity4={data.amenity4}
                feature4={data.feature4}
                amenity5={data.amenity5}
                feature5={data.feature5}
                amenity6={data.amenity6}
                facility1={data.facility1}
                facility2={data.facility2}
                facility3={data.facility3}
                facility4={data.facility4}
                facility5={data.facility5}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
