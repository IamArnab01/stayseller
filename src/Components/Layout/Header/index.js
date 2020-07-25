import React, { Component } from "react";
import Logo from "../../../Assets/img/logo.png";
import Aux from "../../../hoc/Aux";
class Header extends Component {
  render() {
    return (
      <Aux>
        <nav className="navbar navbar-light th-bg-white sticky-top">
          <div className="container">
            <a className="navbar-brand" href=" ">
              <img
                src={Logo}
                width="auto%"
                height="35"
                className="d-inline-block align-top"
                alt=""
              />
            </a>
            <div className="justify-content-end">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span className="th-14 th-bold"> +91-9472394068</span>
            </div>
          </div>
        </nav>
      </Aux>
    );
  }
}

export default Header;
