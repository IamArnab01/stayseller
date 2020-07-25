import React, { Component } from "react";
import Aux from "../../../hoc/Aux";
class AddGuest extends Component {
  render() {
    return (
      <Aux>
        <div className="container px-30 mt-3">
          <div className="row">
            <div className="th-48 th-bold th-black pt-3 pb-2">
              Add Guest Details
            </div>
          </div>
        </div>
        <div className="container px-30  mt-4 ">
          <div className="row th-card th-bg-white py-3 px-2">
            <div className="col-lg-12">
              <div className="row">
                <div className=" col-lg-4 th-lt-grey">
                  <div className="py-2 th-12 th-bold">Title*</div>
                  <div>
                    <select className="py-2 th-14 add-guest-form th-black">
                      <option selected>Mr.</option>
                      <option value="1">Mrs.</option>
                      <option value="2">Ms.</option>
                    </select>
                  </div>
                </div>
                <div className=" col-lg-4 th-lt-grey">
                  <div className="py-2 th-12 th-bold">First Name*</div>
                  <div>
                    <input type="text" className="add-guest-form th-14" />
                  </div>
                </div>
                <div className=" col-lg-4 th-lt-grey">
                  <div className="py-2 th-12 th-bold">Last Name*</div>
                  <div>
                    <input type="text" className="add-guest-form th-14" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row ">
                <div className=" col-lg-4 th-lt-grey">
                  <div className="py-2 th-12 th-bold">Email*</div>
                  <div>
                    <input type="email" className="add-guest-form th-14" />
                  </div>
                </div>
                <div className=" col-lg-4 th-lt-grey">
                  <div className="py-2 th-12 th-bold">Country*</div>
                  <div>
                    <select className="py-2 th-14 add-guest-form th-black">
                      <option selected>India (+91)</option>
                      <option value="1">India (+91)</option>
                      <option value="2">India (+91)</option>
                    </select>
                  </div>
                </div>
                <div className=" col-lg-4 th-lt-grey">
                  <div className="py-2 th-12 th-bold">Phone Number*</div>
                  <div>
                    <input type="number" className="add-guest-form th-14" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row th-bg-white  pb-4">
                <div className=" col-lg-12 th-lt-grey">
                  <div className="py-2 th-12 th-bold">
                    Special Requests(Optional)
                  </div>
                  <div>
                    <textarea className="add-guest-form" rows="2"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row th-bg-white px-2 pb-4">
                <div className=" col-lg-9 th-lt-grey">
                  {/* <div className="py-2 th-12 th-bold">I have read and understood the Privacy Policy.* Privacy Notice</div>  */}
                  <form>
                    <div className="checkbox th-14 th-lt-black">
                      <label>
                        <input type="checkbox" value="" /> I have read and
                        understood the Privacy Policy.*
                        <span
                          className=" th-bold"
                          style={{ textDecoration: "underline" }}
                        >
                          Privacy Notice
                        </span>{" "}
                      </label>
                    </div>
                    <div className="checkbox th-14 th-lt-black">
                      <label>
                        <input type="checkbox" value="" /> I have read and agree
                        to the Terms and Conditions.*
                        <span
                          className=" th-bold"
                          style={{ textDecoration: "underline" }}
                        >
                          Terms & Conditions
                        </span>
                      </label>
                    </div>
                  </form>
                </div>
                <div className=" col-lg-3 th-lt-grey d-sm-block d-none">
                  <div>
                    <button className="th-btn-solid">Pay Now</button>
                  </div>
                </div>
                {/* Mobile button only  */}
                <div className="px-15 pt-2 d-sm-none">
                  <div>
                    <button className="th-btn-solid">Pay Now</button>
                  </div>
                </div>
                {/* Mobile button only end */}
              </div>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default AddGuest;
