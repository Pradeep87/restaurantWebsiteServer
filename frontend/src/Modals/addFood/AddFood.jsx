import React from "react";
import { ADD_FOOD_MODAL } from "../../redux/constants/Constants";
import { useDispatch } from "react-redux";
import { Button, InputBox, SelectBox, Spacer } from "../../components";

const AddFood = () => {
  const dispatch = useDispatch();
  const handleModal = () => {
    dispatch({ type: ADD_FOOD_MODAL });
  };
  return (
    <div className="modalWrapper">
      <div className="modalArea">
        <i class="fa-solid fa-xmark  closeIcon" onClick={handleModal}></i>
        <Spacer height={20} />
        <h2>Add Products</h2>
        <Spacer height={20} />
        <InputBox placeholder="Product Name" />
        <Spacer height={20} />
        <SelectBox placeholder="Select Category" options={["abc"]} />
        <Spacer height={20} />
        <SelectBox placeholder="Select Subategory" options={["abc"]} />
        <Spacer height={20} />
        <InputBox placeholder="Components" />
        <Spacer height={20} />
        <InputBox placeholder="Notes" />
        <Spacer height={20} />
        <InputBox placeholder="description" />
        <Spacer height={20} />
        <SelectBox placeholder="Addons" options={["abc"]} />
        <Spacer height={20} />
        <p>Choose Image</p>
        <Spacer height={5} />
        <input type="file" name="" id="" />
        <Spacer height={20} />
        <Button btnName="Save" />
        <Spacer height={20} />
      </div>
    </div>
  );
};

export default AddFood;
