import React from 'react'
import './spacialFood.css'
import offer1 from "../../../images/offer1.jfif";
import offer2 from "../../../images/offer2.webp";
import offer3 from "../../../images/offer3.png";
import offer4 from "../../../images/offer4.jfif";
import offer5 from "../../../images/offer5.png";
import { Button,ContentWrapper } from "../../../components";


const offerCardData = [
    {
      img: offer1,
      offerName: "Product Name",
      dishes: "dishes",
      rattings: "4.5",
      price: 251,
      discount: "50%",
    },
    {
      img: offer2,
      offerName: "Product Name",
      dishes: "dishes",
      rattings: "4.5",
      price: 251,
      discount: "50%",
    },
    {
      img: offer3,
      offerName: "Product Name",
      dishes: "dishes",
      rattings: "4.5",
      price: 251,
      discount: "50%",
    },
    {
      img: offer4,
      offerName: "Product Name",
      dishes: "dishes",
      rattings: "4.5",
      price: 251,
      discount: "50%",
    },
    {
      img: offer5,
      offerName: "Product Name",
      dishes: "dishes",
      rattings: "4.5",
      price: 251,
      discount: "50%",
    },
    {
      img: offer1,
      offerName: "Product Name",
      dishes: "dishes",
      rattings: "4.5",
      price: 251,
      discount: "50%",
    },
    {
      img: offer2,
      offerName: "Product Name",
      dishes: "dishes",
      rattings: "4.5",
      price: 251,
      discount: "50%",
    },
    {
        img: offer3,
        offerName: "Product Name",
        dishes: "dishes",
        rattings: "4.5",
        price: 251,
        discount: "50%",
      },
  ];

const SpacialFood = () => {
  
  return (<>
      <ContentWrapper>
        <div className="offersList">
          <div>
            <h1>Spacial Food Items</h1>
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
                  <Button btnName="add to cart"
                  icon={<i class="fa-solid fa-cart-plus"></i>}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentWrapper>
  </>
  )
}

export default SpacialFood