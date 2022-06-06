import React from "react";
import "./overView.css";

const faclitiesData = [
  "  Shopping",
  "  Spa",
  " Air-conditioned rooms",
  " Dining area",
  "Environmentally friendly",
  " Garden",
  " Lounge",
  "Luggage room / storage",
];

const facilitiesTwo = [
  " Terrace",
  "Yoga shala",
  "Convenience / grocery store",
  " Free bicycle",
  "  Free parking",
  " Free Wi-Fi",
  "Internet access",
  " Ironing / ironing board",
  "  Laundry",
];

const facilitiesThree = [
  "Medical assistance",
  "  Tour assistance",
  "  Wireless internet",
  " Outdoor shower",
  " Meditation garden",
  "  Multilingual staff",
  " Smoke-free property",
];

const CancellationPolicy = [
  "A reservation requires a deposit of 30% of the total price.",
  "The deposit is non-refundable, if the booking is cancelled.",
  "The rest of the payment should be paid on departure.",
  "Book with flexible conditions",
];

const MoreInfo = [
  "Breakfast",
  "Home Delivery",
  "Takeaway Available",
  "Vegetarian Only",
  "Free Parking",
  "Indoor Seating",
];

const OverView = () => {
  return (
    <div className="facilities">
      <div className="facilitiesContainer">
        <ul>
          <h2>Facilities</h2>
          {faclitiesData.map((data) => (
            <li>
              <i className="fa-solid fa-check"></i> {data}
            </li>
          ))}
        </ul>
        <ul>
          {facilitiesTwo.map((data) => (
            <li>
              <i className="fa-solid fa-check"></i> {data}
            </li>
          ))}
        </ul>
        <ul>
          {facilitiesThree.map((data) => (
            <li>
              <i className="fa-solid fa-check"></i> {data}
            </li>
          ))}
        </ul>
      </div>
      <div className="facilitiesContainer">
        <ul>
          <h2>More Info</h2>
          {MoreInfo.map((data) => (
            <li>
              <i className="fa-solid fa-check"></i> {data}
            </li>
          ))}
        </ul>
        <ul>
          <h2>Cancellation Policy</h2>
          {CancellationPolicy.map((data) => (
            <li>
              <i className="fa-solid fa-check"></i> {data}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OverView;
