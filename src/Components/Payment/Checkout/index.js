import React from "react";
import Aux from "../../../hoc/Aux";
import FixedTop from "../Common/TopHeader";
import Summary from "../Common/Summary";
import SelectRoom from "./SelectRoom/index";
import Policy from "../Common/Policy";
export default function Checkout() {
  return (
    <Aux>
      {/* <div className="sticky-top"></div> */}
      <FixedTop />
      <Summary />
      <SelectRoom />
      <Policy />
      <br />
    </Aux>
  );
}
