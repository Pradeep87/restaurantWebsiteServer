import React from 'react'
import { ContentWrapper, Spacer, MutedText } from "../../../components";
import cookingImg from "../../../images/cooking.png";


const Buyers = () => {
  return (
    <>
    <Spacer height={100} />
    <ContentWrapper dashboard={true}>
      <div className="allordersDetails">
        <h2>Reviews</h2>
    <Spacer height={20} />
        <ul>
          <li>
            Total Reviews <span>545</span>
          </li>
          <li>
Review This Week <span>545</span>
          </li>
          <li>
           Total User : <span>545</span>
          </li>
          <li>
User This Week : <span>545</span>
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
          <div>Name</div>
          <div>Reviews</div>
          <div>Actions</div>
        </div>
        <div className="orderDetailsHeader">
          <div>
            <div className="cutomerImage">
              <img src={cookingImg} alt="" />
            </div>
          </div>
            <div className="orderInformation">
              <p>
             Custometr <span>Publish</span>{" "}
              </p>
              <Spacer height={5} />
              <MutedText text="Pubished On Tue, May 31,2022 6:10pm " />
              <Spacer height={5} />
              <span>1 comment</span>
              <Spacer height={5} />
            </div>
          <div>
          <div>4.5 ratings</div>
          </div>
          <div>
          <i class="fa-solid fa-share"></i>
          </div>
        </div>
      </div>
    </ContentWrapper>
  </>
  )
}

export default Buyers