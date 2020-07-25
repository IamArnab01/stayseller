import React from "react";
import Aux from "../../hoc/Aux";
import HomeTop from "./Hometop";
import Amenities from "./Amenities";
import About from "./About";
import OurHotel from "./OurHotel/OurHotel";
export default function Home() {
  return (
    <Aux>
      <HomeTop />
      <Amenities />
      <About />
      <OurHotel />
    </Aux>
  );
}
