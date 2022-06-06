import React from "react";
import "./banner.css";
import {
  ContentWrapper,
  Spacer,
  CheckBox,
} from ".././../../../components";
import cooking from "../../../../images/cooking.png";
import { useDispatch } from "react-redux";
import { ADD_BANNER_MODAL } from "../../../../redux/constants/Constants";

const Banner = () => {
  const dispatch=useDispatch()
  const openBannerModal = () => {
    dispatch({type:ADD_BANNER_MODAL})
  };
  return (
    <div>
      <Spacer height={50} />
      <ContentWrapper dashboard={true}>
        <h2>Banner</h2>
        <div className="addNewIcon">
          <i class="fa-solid fa-circle-plus" onClick={openBannerModal} ></i>
          <h2>Add New</h2>
        </div>
      </ContentWrapper>
      <Spacer height={20} />
      <ContentWrapper dashboard={true}>
        <div className="ordersLimitList">
          <ul className="ListHeader bannerHeader">
            <li>Banner</li>
            <li>Status </li>
            <li>Title</li>
            <li>Type</li>
            <li>Action</li>
          </ul>
          <Spacer height={20} />
          <ul className="listContent banner">
            <li>
              <img
                src={cooking}
                alt=""
                style={{ width: "100px", height: "100px" }}
              />
            </li>
            <li>
              <CheckBox />
            </li>
            <li>Banner</li>
            <li>Food</li>
            <li>
              <i
                class="fa-solid fa-pencil editIcon "
                onClick={openBannerModal}
              ></i>
              <i class="fa-solid fa-trash deleteIcon "></i>
            </li>
          </ul>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Banner;
