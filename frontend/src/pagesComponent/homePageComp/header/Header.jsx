import React from "react";
import "./header.css";
import QrCode from "../../../images/qrcode.jpg";
import { Spacer,ContentWrapper } from "../../../components";
const Header = () => {
  return (
    <div className="headerContainer">
      <Spacer height={50} />
      <ContentWrapper>
        <div style={{ display: "flex" }}>
          <div>
            <h1>Biryani By Kilo</h1>
            <span>Biryani, Mughlai</span>
            <br />
            <span>kishan nagar, Khurbura Mohalla</span>
            <div className="ratings">
              <div>
                <p>4.0</p>
                <span>500+ Ratings</span>
              </div>
              <div>
                <p>45 mins</p>
                <span>Delivery Time</span>
              </div>
              <div>
                <p>Rs 700</p>
                <span>cost for two</span>
              </div>
            </div>
          </div>
          <div className="qrCode">
            <img src={QrCode} alt="" />
            <p>Order From Phone </p>
          </div>
        </div>
        <div className="offers">
          <p className="OfferTag">OFFER</p>
          <div>
            <i className="fa-solid fa-certificate"></i>
            <p>50% off up to ₹100 | Use code TRYNEW</p>
          </div>
          <div>
            <i className="fa-solid fa-certificate"></i>
            <p>50% off up to ₹100 + Flat ₹30 cashback with Paytm | Use</p>
          </div>
        </div>
      </ContentWrapper>
      <Spacer height={50} />
    </div>
  );
};

export default Header;
