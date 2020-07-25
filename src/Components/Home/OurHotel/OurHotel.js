import React, { Component } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Data1 from "./Data1";
import Data2 from "./Data2";

const data = Data1;
const Grid = Data2.map((item, index) => {
  return (
    <Card2
      title={item.title}
      hotel={item.hotel}
      address={item.address}
      price={item.price}
      span={item.span}
      btn={item.btn}
    />
  );
});

class Hotel extends Component {
  render() {
    return (
      <di>
        <div className="container">
          <div className="row th-mob-txt-center">
            <div className="col-md-12 pt-5">
              <div className="th-48 th-bold th-black pb-2">Our Hotels</div>
            </div>
          </div>
          <Card1
            title={data.title}
            hotel={data.hotel}
            address={data.address}
            price={data.price}
            span={data.span}
            btn={data.btn}
          />
        </div>
        {/*  */}
        <div className="container py-2 px-30">
          <div className="row">{Grid}</div>
        </div>
      </di>
    );
  }
}

export default Hotel;
