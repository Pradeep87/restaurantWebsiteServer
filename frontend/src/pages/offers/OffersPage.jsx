import React from "react";
import "./offers.css";
import offer1 from "../../images/offer1.jfif";
import offer2 from "../../images/offer2.webp";
import offer3 from "../../images/offer3.png";
import offer4 from "../../images/offer4.jfif";
import offer5 from "../../images/offer5.png";
import { Spacer,ContentWrapper } from "../../components";

const offerCardData = [
  {
    img: offer1,
    offerName: "offer Name",
    dishes: "dishes",
    rattings: "4.5",
    price: 251,
    discount: "50%",
  },
  {
    img: offer2,
    offerName: "offer Name",
    dishes: "dishes",
    rattings: "4.5",
    price: 251,
    discount: "50%",
  },
  {
    img: offer3,
    offerName: "offer Name",
    dishes: "dishes",
    rattings: "4.5",
    price: 251,
    discount: "50%",
  },
  {
    img: offer4,
    offerName: "offer Name",
    dishes: "dishes",
    rattings: "4.5",
    price: 251,
    discount: "50%",
  },
  {
    img: offer5,
    offerName: "offer Name",
    dishes: "dishes",
    rattings: "4.5",
    price: 251,
    discount: "50%",
  },
  {
    img: offer1,
    offerName: "offer Name",
    dishes: "dishes",
    rattings: "4.5",
    price: 251,
    discount: "50%",
  },
  {
    img: offer2,
    offerName: "offer Name",
    dishes: "dishes",
    rattings: "4.5",
    price: 251,
    discount: "50%",
  },
];

const OffersPage = () => {
  return (
    <>
      <div className="offersPage">
        <Spacer height={50} />
        <ContentWrapper>
          
          <div className="allOffers">
            <h1>Offers for you</h1>
            <p>Explore top deals and offers exclusively for you!</p>
          </div>
        </ContentWrapper>

        <Spacer height={50} />
      </div>
      <Spacer height={70} />
      <ContentWrapper>
        <div className="offersList">
          <div>
            <h1>Resturant Offers</h1>
            <span>All Offers ( 12 )</span>
          </div>
          <br />
          <hr />

          <div className="offerContainer">
            {offerCardData.map((data) => (
              <div className="offerCard">
                <div className="offerCardImg">
                  <img src={data.img} alt="" />
                </div>
                <div className="offerCardBody">
                  <p>{data.offerName}</p>
                  <p className="dishName">{data.dishes}</p>
                  <div className="ratting">
                    <p>{data.rattings}</p>
                    <p>Price {data.price} Rs.</p>
                  </div>
                  <hr />
                  <p>{data.discount} off | Use TRYNEW</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentWrapper>
    </>
  );
};

export default OffersPage;
