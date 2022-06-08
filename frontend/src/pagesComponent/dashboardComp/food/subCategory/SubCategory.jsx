import React, { useEffect } from "react";
import { ContentWrapper, Spacer, MutedText } from ".././../../../components";
import cooking from "../../../../images/cooking.png";
import { useDispatch, useSelector } from "react-redux";
import { ADD_SUBCATEGORY_MODAL } from "../../../../redux/constants/Constants";
import { getSubCategory } from "../../../../redux/actions/subCategoryActions";

const SubCategory = () => {
  const dispatch = useDispatch();
  const { loading, subCategoryData } = useSelector(
    (state) => state.subCategoryReducer
  );
  const openSubCategoryModal = () => {
    dispatch({ type: ADD_SUBCATEGORY_MODAL });
  };
  useEffect(() => {
    dispatch(getSubCategory());
  }, [dispatch]);

  return (
    <div>
      <Spacer height={50} />
      <ContentWrapper dashboard={true}>
        <h2>Subcategies</h2>
        <div className="addNewIcon" onClick={openSubCategoryModal}>
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
            subCategoryData.map((data) => (
              <ul className="listContent banner">
                <li>
                  <img
                    src={cooking}
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </li>
                <li>
                  <div>
                    <p>{data.name} </p>
                    <Spacer height={5} />
                    <MutedText text="0 Items" />
                    <Spacer height={5} />
                    <MutedText text={data.meta.description} />
                  </div>
                </li>
                <li>
                  <i
                    class="fa-solid fa-pencil editIcon "
                    onClick={openSubCategoryModal}
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

export default SubCategory;
