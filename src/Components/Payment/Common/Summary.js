import React, { Component } from "react";
import Img from "../../../Assets/img/car2.png";
class Summary extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="row th-card ">
            <div className="col-lg-5 p-4">
              <div className="th-32 th-black th-bold py-3">
                Taj Jumeirah Lakes Towers
              </div>
              <div className="row pb-3">
                <div className="col-lg-6 ">
                  <div className="th-lt-grey th-14 text-uppercase">
                    Check - in Date (2pm)
                  </div>
                  <div className="th-lt-black th-18 th-bold">07 Mar 2020</div>
                </div>
                <div className="col-lg-6 ">
                  <div className="th-lt-grey th-14 text-uppercase">
                    Check - out Date (12pm)
                  </div>
                  <div className="th-lt-black th-18 th-bold">07 Mar 2020</div>
                </div>
              </div>
              <div className="py-1">
                <img src={Img} className="img-icon-details" alt=" " />
                <span className="th-18 th-black th-bold px-1">ROOM:1</span>
                <span className="th-18 th-lt-black">
                  Superior Room - 2 Adults | 0 Child
                </span>
              </div>
              <div className="py-1">
                <img src={Img} className="img-icon-details" alt=" " />
                <span className="th-18 th-black th-bold px-1">ROOM:1</span>
                <span className="th-18 th-lt-black">
                  Superior Room - 2 Adults | 0 Child
                </span>
              </div>
            </div>
            <div
              className="col-lg-5 offset-lg-2 p-4"
              style={{
                border: "1px solid #EDEEF0",
                boxSizing: "border-box",
                borderRadius: "0px 3px 3px 0px",
              }}
            >
              <div className="th-lt-black th-20 th-bold pb-3">
                Summary Charges
              </div>
              <div className="row d-flex justify-content-between px-3 pb-2 ">
                <div className=" d-sm-block d-none">
                  <div className="th-lt-black th-18">
                    Price (2 Rooms x 1 Nights)
                  </div>
                </div>
                <div className=" d-sm-block d-none">
                  <div className="th-lt-black th-18 th-bold">+ ₹ 1000.00</div>
                </div>
              </div>
              {/* <!-- Mobile only --> */}
              <div className="row justify-content-between px-3 pb-2 d-sm-none">
                <div className="th-lt-black th-18">2 Rooms x 1 Nights</div>
                <div className="th-lt-black th-18 th-bold">+ ₹ 122000.00</div>
              </div>
              {/* <!-- Mobile only end --> */}
              <div className="row d-flex justify-content-between px-3 pb-2 ">
                <div className="th-lt-black th-18">Taxes and fees</div>
                <div className="th-lt-black th-18 th-bold">+ ₹ 243.00</div>
              </div>

              <div className="row d-flex justify-content-between align-items-center px-3 pb-2 ">
                <div className="th-lt-black th-18  d-sm-block d-none">
                  Taxes and fees
                </div>
                <div className=" d-sm-block d-none">
                  {/* <!-- <div className="th-lt-black th-18 th-bold">+ ₹ 243.00</div> --> */}
                  <div className="row d-flex px-3">
                    <div style={{ width: "10vw;" }}>
                      {" "}
                      <input className="th-promo-form " type="text" />
                    </div>

                    <div>
                      {" "}
                      <button className="th-promo-btn" type="submit">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Mobile only --> */}
              <div className=" pb-2 d-sm-none">
                <div className="row justify-content-end d-flex px-3">
                  <div className="" style={{ width: "30vw;" }}>
                    {" "}
                    <input className="th-promo-form " type="text" />
                  </div>
                  <div className="">
                    {" "}
                    <button className="th-promo-btn" type="submit">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- Mobile only end --> */}
              <div className="row d-flex justify-content-between px-3 pb-2 ">
                <div className="th-lt-black th-18"></div>
                <div className="th-lt-black th-18 th-bold">- ₹ 243.00</div>
              </div>

              <div className="row d-flex justify-content-between px-3 pb-2 ">
                <div className="th-lt-black th-18 th-bold d-sm-block d-none">
                  Total( 2 Rooms x 1 Night )
                </div>
                <div className="th-lt-black th-18 th-bold d-sm-block d-none">
                  ₹ 2323232.00
                </div>
              </div>
              {/* <!-- Mobile only --> */}
              <div className="row d-flex justify-content-between px-3 pb-2 d-sm-none">
                <div className="th-lt-black th-18 th-bold">Total Price</div>
                <div className="th-lt-black th-18 th-bold">₹ 2323232.00</div>
              </div>
              {/* <!-- Mobile only end --> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
