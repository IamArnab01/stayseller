import React, { Component } from "react";
import Aux from "../../../hoc/Aux";
import Card from "./Card";
import Data from "./Data";
const Grid = Data.map((item, index) => {
  return (
    <Card
      tag1={item.tag1}
      date={item.date}
      tag2={item.tag2}
      span1={item.span1}
      span2={item.span2}
      span3={item.span3}
      span4={item.span4}
      supRoom={item.supRoom}
      para={item.para}
      option1={item.option1}
      option2={item.option2}
      price={item.price}
      oldPrice={item.oldPrice}
      room={item.room}
      stay={item.stay}
      btn1={item.btn1}
      btn2={item.btn2}
    />
  );
});

class SelectRoom extends Component {
  render() {
    return (
      <Aux>
        <div className="container mob-px-30">
          <div className="row">
            <div className="col-md-12 pr-0 pl-0">
              <div className="th-48 th-bold th-black pt-5 ">Select Room</div>
            </div>
          </div>
        </div>

        {/* cards */}
        <div className="container py-2 mob-px-30">{Grid}</div>
      </Aux>
    );
  }
}

export default SelectRoom;
