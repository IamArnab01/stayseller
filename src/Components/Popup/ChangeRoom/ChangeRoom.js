import React, { Component } from "react";
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

class ChangeRoomPopUp extends Component {
  render() {
    return (
      <div>
        <div className="modal-header" style={{ borderBottom: "none" }}>
          <h5 className="modal-title th-36">Select Room</h5>
        </div>

        <div className="container modal-body py-2 px-30">
          {/* grid card */}
          {Grid}
        </div>
      </div>
    );
  }
}

export default ChangeRoomPopUp;
