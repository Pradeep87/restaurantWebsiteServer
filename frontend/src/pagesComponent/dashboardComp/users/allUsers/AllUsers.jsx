import React from "react";
import { ContentWrapper, Spacer, MutedText } from "../../../../components";
import cookingImg from "../../../../images/cooking.png";

const AllUsers = () => {
  return (
    <>
      <Spacer height={100} />
      <ContentWrapper dashboard={true}>
        <div className="allordersDetails">
          <h2>All Users</h2>
      <Spacer height={20} />

          <ul>
            <li>
              Total User : <span>545</span>
            </li>
            <li>
              User This Week : <span>545</span>
            </li>
            <li>
              Total Reviews <span>545</span>
            </li>
            <li>
              Review This Week <span>545</span>
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
            <div>Roll</div>
            <div>Actions</div>
          </div>
          <div className="orderDetailsHeader">
            <div>
              <div className="cutomerImage">
                <img src={cookingImg} alt="" />
              </div>
            </div>
            <div className="orderInformation">
              <p>Custometr Name</p>
              <Spacer height={5} />
              <MutedText text="Email" />
              <Spacer height={5} />
              <MutedText text="Phone" />
            </div>
            <div>
              <div>
                <p>roll</p>
                <Spacer height={5} />
                <MutedText text="1 permission " />
              </div>
            </div>
            <div>
              <i class="fa-solid fa-pencil editIcon "></i>
              <i class="fa-solid fa-trash deleteIcon "></i>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </>
  );
};

export default AllUsers;
