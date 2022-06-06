import React from 'react'
import {useDispatch} from 'react-redux'
import { ADD_CATEGORY_MODAL } from '../../redux/constants/Constants'
import {InputBox,Button,Spacer} from '../../components'


const AddfoodCategory = () => {
  const dispatch=useDispatch()
  const handleModal=()=>{
    dispatch({type:ADD_CATEGORY_MODAL})
  }
  return (
    <div className="modalWrapper">
    <div className="modalArea">
    <i class="fa-solid fa-xmark  closeIcon" onClick={handleModal}></i>
    <Spacer height={20} />
      <h2>Add New  Category</h2>
      <Spacer height={20} />
      <InputBox placeholder='Category Name' />
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

export default AddfoodCategory