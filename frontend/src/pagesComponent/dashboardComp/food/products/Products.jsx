import React from "react";
import {
  ContentWrapper,
  Spacer,
  MutedText,
  CheckBox,
} from ".././../../../components";
import cooking from "../../../../images/cooking.png";
import {ADD_FOOD_MODAL} from '../../../../redux/constants/Constants'
import { useDispatch } from "react-redux";

const Products = () => {
  const dispatch=useDispatch()

  const openModal=()=>{
    dispatch({type:ADD_FOOD_MODAL})
  }
  return (
    <div>
      <Spacer height={50} />
      <ContentWrapper dashboard={true}  >
        <h2>Products</h2>
        <div className="addNewIcon" onClick={openModal} >
          <i class="fa-solid fa-circle-plus"></i>
          <h2>Add New</h2>
        </div>
      </ContentWrapper>
      <Spacer height={20} />
      <ContentWrapper dashboard={true}>
        <div className="ordersLimitList">
          <ul className="ListHeader bannerHeader">
            <li>#</li>
            <li>Available</li>
            <li>Burgur</li>
            <li>Breakfast</li>
            <li>Price</li>
            <li>Actions</li>
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
            <li>
              name
              <MutedText text="last modified mon, may 30,2022 3:30 pm" />
            </li>
            <li>category</li>
            <li>price</li>
            <li>
              <i
                class="fa-solid fa-pencil editIcon "
                onClick={openModal}
              ></i>
              <i class="fa-solid fa-trash deleteIcon "></i>
            </li>
          </ul>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Products;
