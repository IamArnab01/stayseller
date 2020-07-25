import React from "react";
import TopHeader from "../Common/TopHeader";
import Summary from "../Common/Summary";
import AddGuest from "./addGuest";
import Policy from "../Common/Policy";
export default function Add() {
  return (
    <div>
      <TopHeader />
      <Summary />
      <AddGuest />
      <Policy />
    </div>
  );
}
