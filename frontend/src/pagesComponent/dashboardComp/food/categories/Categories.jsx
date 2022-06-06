import React, { useEffect } from "react";
import { ContentWrapper, Spacer, MutedText } from ".././../../../components";
import cooking from "../../../../images/cooking.png";
import { ADD_CATEGORY_MODAL } from "../../../../redux/constants/Constants";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../../../redux/actions/categoryActions";

const Categories = () => {
  const dispatch = useDispatch();

  const { categoryData, loading } = useSelector(
    (state) => state.categoryReducer
  );

  console.log(categoryData);
  const openCategoryModal = () => {
    dispatch({ type: ADD_CATEGORY_MODAL });
  };
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <div>
      <Spacer height={50} />
      <ContentWrapper dashboard={true}>
        <h2>Category</h2>
        <div className="addNewIcon" onClick={openCategoryModal}>
          <i class="fa-solid fa-circle-plus"></i>
          <h2>Add New</h2>
        </div>
      </ContentWrapper>
      <Spacer height={20} />
      <ContentWrapper dashboard={true}>
        <div className="ordersLimitList">
          <ul className="ListHeader bannerHeader">
            <li>#</li>
            <li>Name</li>
            <li>Actions</li>
          </ul>
          <Spacer height={20} />
          {loading ? (
            <>
              <h1>loading</h1>
            </>
          ) : (
            categoryData?.map((data) => (
              <ul className="listContent banner" key={data._id}>
                <li>
                  <img
                    src={cooking}
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </li>
                <li>
                  <div>
                    <p>
                      {data.categoryName} <span>Publish</span>{" "}
                    </p>
                    <Spacer height={5} />
                    <MutedText text={data.productCount} />
                    <Spacer height={5} />
                    <MutedText text={`Updated At ${data.updatetedAt} `} />
                    <Spacer height={5} />
                    <MutedText text={data.meta.description} />
                  </div>
                </li>
                <li>
                  <i
                    class="fa-solid fa-pencil editIcon "
                    onClick={openCategoryModal}
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

export default Categories;
