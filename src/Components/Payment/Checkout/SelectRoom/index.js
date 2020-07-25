import React, { Component } from "react";
import Aux from "../../../../hoc/Aux";
import Card from "./Card";
import Data from "./Data";
const Grid = Data.map((item, index) => {
  return (
    <Card
      title={item.title}
      btn={item.btn}
      guest={item.guest}
      adult={item.adult}
      child={item.child}
      price={item.price}
      content={item.content}
      room={item.room}
      timing={item.timing}
      facility1={item.facility1}
      facility2={item.facility2}
      facility3={item.facility3}
      facility4={item.facility4}
      radioBtn={item.radioBtn}
    />
  );
});

class SelectRoom extends Component {
  render() {
    return (
      <Aux>
        <div className="container mt-3">
          <div className="row ">
            <div className="col-lg-12">
              <div className="th-48 th-bold th-black pt-3 pb-2">
                Select Room
              </div>
            </div>
          </div>
          {Grid}
        </div>
      </Aux>
    );
  }
}

export default SelectRoom;
