import React, { Component } from "react";

class Policy extends Component {
  render() {
    return (
      <div className="container pb-5 pt-5 th-30">
        <div className="row th-card th-bg-white py-4 mx-0 px-2">
          <div className="col-lg-12 th-36 th-bold th-black py-3">
            Cancellation Policy
          </div>
          <div className="th-18 col-lg-12 th-grey">
            <div>
              Any Cancellation or Change in the date should be intimated at
              least 15 days in advance otherwise
            </div>
            <div>
              Retention Charges will be applicable as per rules mentioned below:
            </div>
            <div>Before 15 days 30% of Booking Amount</div>
            <div>Before 7 days to 10 days 50% of Booking Amount</div>
            <div>Before 4 days to 6 days No Refund</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Policy;
