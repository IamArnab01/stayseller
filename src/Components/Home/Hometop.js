import React from "react";
import Header from "../../Assets/img/hotel.jpeg";
export default function Hometop() {
  return (
    <div>
      <div class="hero-image" style={{ backgroundImage: `url(${Header})` }}>
        <div class="container">
          <div class="row">
            <div class="hero-text">
              <div
                class=" th-bold py-2 th-white th-58"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Hotel Saraswati Palace
              </div>
              <div class="th-18 th-medium py-2 th-white">
                Siyal, Manali, Himachal Pradesh
              </div>
              <div class="py-4">
                <button class="th-btn-white">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
