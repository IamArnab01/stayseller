import React from "react";
import FixedTop from "../Common/TopHeader";
import Summary from "../Common/Summary";
import SelectRoom from "./SelectRoom/index";
import Policy from "../Common/Policy";
export default function Checkout() {
  return (
    <div>
      {/* <div className="sticky-top"></div> */}
      <FixedTop />
      <Summary />
      <SelectRoom />
      <Policy />
      <br />
    </div>
  );
}
