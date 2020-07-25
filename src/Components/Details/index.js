import React from "react";
import Aux from "../../hoc/Aux";
import DetailTop from "./DeatilTop";
import Highlights from "./HotelHighlights/Highlights";
import SelectRoom from "./SelectRoom/index";
export default function Detail() {
  return (
    <Aux>
      <DetailTop />
      <Highlights />
      <SelectRoom />
    </Aux>
  );
}
