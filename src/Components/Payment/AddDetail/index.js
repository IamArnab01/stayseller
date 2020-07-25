import React from "react";
import Aux from "../../../hoc/Aux";
import TopHeader from "../Common/TopHeader";
import Summary from "../Common/Summary";
import AddGuest from "./addGuest";
import Policy from "../Common/Policy";
export default function Add() {
  return (
    <Aux>
      <TopHeader />
      <Summary />
      <AddGuest />
      <Policy />
    </Aux>
  );
}
