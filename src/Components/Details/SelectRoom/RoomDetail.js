import React, { Component } from "react";

export default class Detail extends Component {
  render() {
    return (
      <div className="row px-5 py-3">
        <div className="col-lg-6">
          <div className="th-18 th-bold th-grey py-3">{this.props.header}</div>
          <div className="th-18 th-grey pb-3">{this.props.content}</div>
          <div className="th-18 th-bold th-grey py-3 ">{this.props.other}</div>
          <div className="th-18 th-grey">
            {this.props.conv1}
            <br />
            {this.props.conv2}
            <br />
            {this.props.conv3}
            <br />
            {this.props.conv4}
            <br />
            {this.props.conv5}
            <br />
            {this.props.conv6}
            <br />
            {this.props.conv7}
            <br />
            {this.props.conv8}
            <br />
            {this.props.conv9}
            <br />
            {this.props.conv10}
            <br />
            {this.props.conv11}
            <br />
            {this.props.conv12}
            <br />
            {this.props.conv13}
            <br />
            {this.props.conv14}
            <br />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="th-18 th-bold th-grey py-3">
            {this.props.amenity1}
          </div>
          <div className="th-18 th-grey pb-3">{this.props.feature1}</div>
          <div className="th-18 th-bold th-grey py-3">
            {this.props.amenity2}{" "}
          </div>
          <div className="th-18 th-grey pb-3">{this.props.feature2}</div>
          <div className="th-18 th-bold th-grey py-3">
            {this.props.amenity3}{" "}
          </div>
          <div className="th-18 th-grey pb-3">{this.props.feature3} </div>
          <div className="th-18 th-bold th-grey py-3">
            {this.props.amenity4}
          </div>
          <div className="th-18 th-grey pb-3">{this.props.feature4}</div>
          <div className="th-18 th-bold th-grey py-3">
            {this.props.amenity5}
          </div>
          <div className="th-18 th-grey pb-3">{this.props.feature5}</div>
          <div className="th-18 th-bold th-grey py-3">
            {this.props.amenity6}
          </div>
          <div class="th-18 th-grey pb-3">
            {this.props.facility1}
            <br />
            {this.props.facility2}
            <br />
            {this.props.facility3}
            <br />
            {this.props.facility4}
            <br />
            {this.props.facility5}
            <br />
          </div>
        </div>
      </div>
    );
  }
}
