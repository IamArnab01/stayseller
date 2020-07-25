import React from "react";
import HomeTop from "./Hometop";
import Amenities from "./Amenities";
import About from "./About";
import OurHotel from "./OurHotel/OurHotel";
export default function Home() {
  return (
    <div>
      <HomeTop />
      <Amenities />
      <About />
      <OurHotel />
    </div>
  );
}
