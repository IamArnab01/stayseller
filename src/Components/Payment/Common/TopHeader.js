import React, { Component } from "react";
class FixedTop extends Component {
  render() {
    return (
      <div>
        <div className="top-confirm-book  d-sm-block d-none ">
          <div className="container">
            <div className="row px-30 d-flex justify-content-between align-items-center ">
              <div>
                <span className="th-18 th-bold align-middle">
                  Amount to Pay{" "}
                </span>{" "}
                <span className="th-30 th-bold align-middle pl-2">
                  {" "}
                  ₹ 2323232.00
                </span>
              </div>
              <div>
                <button type="submit" className="th-btn-solid my-2">
                  Pay now
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* for mobile */}
        <div class="top-confirm-book d-sm-none">
          <div class="container">
            <div class="col-sm-12">
              <div class="row d-flex justify-content-between align-items-center  my-1">
                <div class="col-xs-8">
                  <div class="th-18  text-uppercase th-lt-grey">
                    Amount to Pay{" "}
                  </div>{" "}
                  <div class="th-32 th-bold "> ₹ 2323232.00</div>
                </div>
                <div class="col-xs-4">
                  <button type="submit" class="th-btn-solid my-2">
                    Pay now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FixedTop;
