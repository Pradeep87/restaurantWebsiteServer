import React from 'react'
import {
  ContentWrapper,
  Spacer,
  MutedText,
} from ".././../../../components";
import cooking from "../../../../images/cooking.png";
import { useDispatch } from 'react-redux';
import {ADD_SUBCATEGORY_MODAL} from '../../../../redux/constants/Constants'


const SubCategory = () => {

  const dispatch=useDispatch()
  const openSubCategoryModal=()=>{
    dispatch({type:ADD_SUBCATEGORY_MODAL})
  }

  return (
    <div>
    <Spacer height={50} />
    <ContentWrapper dashboard={true}>
      <h2>Subcategies</h2>
      <div className="addNewIcon" onClick={openSubCategoryModal} >
        <i class="fa-solid fa-circle-plus" ></i>
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
              <p>pepsi </p>
              <Spacer height={5} />
              <MutedText text="0 Items" />
              <Spacer height={5} />
              <MutedText text="date. wed, june 1, 2022 9:26" />
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
      </div>
    </ContentWrapper>
  </div>
  )
}

export default SubCategory