import React from "react";
import DetailTop from "./DeatilTop";
import Highlights from "./HotelHighlights/Highlights";
import SelectRoom from "./SelectRoom/index";
export default function Detail() {
  return (
    <div>
      <DetailTop />
      <Highlights />
      <SelectRoom />
    </div>
  );
}
