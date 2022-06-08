import React, { useEffect } from "react";
import {
  ContentWrapper,
  Spacer,
  MutedText,
  CheckBox,
} from ".././../../../components";
import cooking from "../../../../images/cooking.png";
import { ADD_FOOD_MODAL } from "../../../../redux/constants/Constants";
import { useDispatch, useSelector } from "react-redux";

import { getAllFood } from "../../../../redux/actions/foodItemActions";

const Products = () => {
  const dispatch = useDispatch();
  const { foodData, loading } = useSelector((state) => state.foodReducer);
  const openModal = () => {
    dispatch({ type: ADD_FOOD_MODAL });
  };
  useEffect(() => {
    dispatch(getAllFood());
  }, [dispatch]);

  return (
    <div>
      <Spacer height={50} />
      <ContentWrapper dashboard={true}>
        <h2>Products</h2>
        <div className="addNewIcon" onClick={openModal}>
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
          {loading ? (
            <>
              <h1>loading</h1>
            </>
          ) : (
            foodData?.map((data) => (
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
               {data.name}
                  <MutedText text={data.meta.description} />
                </li>
                <li>{data.category}</li>
                <li>{data.price}</li>
                <li>
                  <i
                    class="fa-solid fa-pencil editIcon "
                    onClick={openModal}
                  ></i>
                  <i class="fa-solid fa-trash deleteIcon "></i>
                </li>
              </ul>
            ))
          )}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Products;
