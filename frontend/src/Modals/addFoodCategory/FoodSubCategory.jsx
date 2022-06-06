import React from 'react'
import { useDispatch } from "react-redux";
import {ADD_SUBCATEGORY_MODAL} from '../../redux/constants/Constants'
import {InputBox,Button,Spacer, SelectBox} from '../../components'

const FoodSubCategory = () => {
  const dispatch=useDispatch()
  const handleModal=()=>{
    dispatch({type:ADD_SUBCATEGORY_MODAL})
  }
  return (
    <div className="modalWrapper">
    <div className="modalArea">
    <i class="fa-solid fa-xmark  closeIcon" onClick={handleModal}></i>
    <Spacer height={20} />
    <h2>Add New Subcategory</h2>
   
    <Spacer height={20} />
      <InputBox placeholder='Category Name' />
    <Spacer height={20} />

      <p>Select Parent Category</p>
    <Spacer height={5} />

      <SelectBox placeholder='Parent Category' options={["abc"]} />
      <Spacer height={20} />

      <p>Choose Image</p>
    <Spacer height={5} />

      <input type="file" name="" id="" />
      <Spacer height={20} />

      <Button btnName="Save" />
    <Spacer height={20} />

    </div>
  </div>
  )
}

export default FoodSubCategory