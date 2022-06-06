import React from "react";
import "./allOrders.css";
import { ContentWrapper, Spacer, MutedText } from "../../../../components";
import cookingImg from "../../../../images/cooking.png";

const AllOrders = () => {
  return (
    <>
      <Spacer height={100} />
      <ContentWrapper dashboard={true}>
        <div className="allordersDetails">
          <ul>
            <li>
              Orders <span>545</span>
            </li>
            <li>
              Cancel : <span>545</span>
            </li>
            <li>
              Total Refund : <span>545</span>
            </li>
            <li>
              Total Orders : <span>545</span>
            </li>
          </ul>
          <Spacer height={20} />
          <p style={{ border: "1px solid red" }}>filters</p>
          <Spacer height={20} />
        </div>
      </ContentWrapper>
      <ContentWrapper dashboard={true}>
        <div className="orderDetails">
          <div className="orderDetailsHeader">
            <div></div>
            <div>Order ID</div>
            <div>Customer</div>
            <div>Order Information</div>
            <div>Actions</div>
          </div>
          <div className="orderDetailsHeader">
            <div>
              <div className="cutomerImage">
                <img src={cookingImg} alt="" />
              </div>
            </div>
            <div>Order ID</div>
            <div>Customer Name</div>
            <div>
              <div className="orderInformation">
                <p>
                  0 items <span>Complted</span>{" "}
                </p>
                <Spacer height={5} />
                <MutedText text="Cash On Delivery" />
                <MutedText text="Order Type" />
                <Spacer height={5} />
                <span>Pickup</span>
                <Spacer height={5} />
                <MutedText total="$ 0.00" />
                <MutedText text="Place On Tue, May 31,2022 6:10pm " />
              </div>
            </div>
            <div>
              <i class="fa-solid fa-download"></i>
              <i class="fa-regular fa-eye"></i>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </>
  );
};

export default AllOrders;
