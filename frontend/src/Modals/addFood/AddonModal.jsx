import React from "react";
import { useDispatch } from "react-redux";
import { Button, Spacer, InputBox } from "../../components";
import { ADD_ADDON_MODAL } from "../../redux/constants/Constants";

const AddonModal = () => {
  const dispatch = useDispatch();
  const handleModal = () => {
    dispatch({ type: ADD_ADDON_MODAL });
  };
  return (
    <div className="modalWrapper">
      <div className="modalArea">
        <i class="fa-solid fa-xmark  closeIcon" onClick={handleModal}></i>
        <Spacer height={20} />
        <h2>Addon</h2>
        <Spacer height={20} />
        <InputBox placeholder="Add-ons Name" />
        <Spacer height={20} />
        <InputBox placeholder="Price" />
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

export default AddonModal;
