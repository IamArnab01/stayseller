import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Header from "../../Assets/img/header.png";
class Top extends Component {
  render() {
    return (
      <Aux>
        <section
          className="bgimage"
          style={{ backgroundImage: `url(${Header})` }}
        >
          <div className="container-fluid">
            <div
              className="row text-center "
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "70vh"
              }}
            >
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div
                  className="th-58 th-white th-bold"
                  style={{ fontFamily: " 'Playfair Display', serif" }}
                >
                  Hotel Saraswati Palace
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="th-search-hotel mb-5">
          <div className="container">
            <div className="row pt-4 pb-2">
              <div className="col-lg-2 ">
                <div className="th-14 th-bold th-lt-grey text-uppercase">
                  Traveling to
                </div>
                {/* <!-- <div className="th-16 th-bold th-black">Manali</div> --> */}
                <select className=" th-16 th-bold th-black form-group custom-select p-0">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-lg-4 ">
                <div className="th-14 th-bold th-lt-grey text-uppercase">
                  Check - in Date & Check - OUT Date
                </div>
                {/* <!-- <div className="th-16 th-bold th-black">07 Mar 2020 - 08 Mar 2020</div> --> */}
                <input
                  type="text"
                  className="custom-date search-date p-0 th-16 th-bold th-black"
                  placeholder="Check In"
                />
                <span>
                  <input
                    type="text"
                    className="custom-date search-date p-0 th-16 th-bold th-black"
                    placeholder="Check out"
                  />
                </span>
              </div>
              <div className="col-lg-3 ">
                <div className="th-14 th-bold th-lt-grey text-uppercase">
                  Room & GUests
                </div>
                {/* <!-- <div className="th-16 th-bold th-black">Room 1 - 2 Guests - 0 Child</div> --> */}
                <select className=" th-16 th-bold th-black form-group custom-select p-0">
                  <option selected>Room 1 - 2 Guests - 0 Child</option>
                  <option value="1">Room 1 - 2 Guests - 1 Child</option>
                  <option value="2">Room 1 - 3 Guests - 0 Child</option>
                  <option value="3">Room 2 - 4 Guests - 0 Child</option>
                </select>
              </div>
              <div className="col-lg-2 offset-lg-1 ">
                {/* <!-- <div className="th-14 th-bold th-lt-grey text-uppercase">Traveling to</div> --> */}
                <div>
                  <button type="submit" className="th-btn-solid my-2">
                    Select Rooms
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default Top;
