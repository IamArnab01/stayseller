import React, { Component } from "react";
import Logo from "../../../Assets/img/logo.png";
class Footer extends Component {
  render() {
    return (
      <div>
        {/* web version
         */}
        <div className="th-bg-grey py-5 d-sm-block d-none">
          <div className="container">
            <div className="row ">
              <div className="col-lg-4 ">
                <img
                  src={Logo}
                  width="auto%"
                  height="45"
                  className="d-inline-block align-top"
                  alt=""
                />
                <div className="th-18 th-grey pt-2">
                  ©2019 The Indian Hotels Company Limited. All Rights Reserved.
                </div>
              </div>
              <div className="col-lg-3 offset-lg-5">
                <div className="th-black th-bold th-32 pb-2">Contact Us</div>
                <div>
                  <i className="fa fa-phone  pr-2"></i>
                  <span className="th-bold th-14">+91-9472394068</span>
                </div>
                <div>
                  <i className="fa fa-envelope th-14 pr-2"></i>
                  <span className="th-bold th-14">
                    Vivek.anand2805@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* mobile footer */}
        <div className="th-bg-grey py-5 d-sm-none ">
          <div className="container">
            <div className="row ">
              <div className="col-sm-12  pb-4">
                <div className="th-black th-bold th-32 pb-2">Contact Us</div>
                <div>
                  <i className="fa fa-phone  pr-2"></i>
                  <span className="th-bold th-14">+91-9472394068</span>
                </div>
                <div>
                  <i className="fa fa-envelope th-14 pr-2"></i>
                  <span className="th-bold th-14">
                    Vivek.anand2805@gmail.com
                  </span>
                </div>
              </div>
              <div className="col-sm-12  ">
                <img
                  src={Logo}
                  width="auto%"
                  height="45"
                  className="d-inline-block align-top"
                  alt=""
                />
                <div className="th-18 th-grey pt-2">
                  ©2019 The Indian Hotels Company Limited. All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
