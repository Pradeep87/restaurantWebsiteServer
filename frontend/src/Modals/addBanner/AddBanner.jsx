import React from "react";
import { useDispatch } from "react-redux";
import { ADD_BANNER_MODAL } from "../../redux/constants/Constants";
import {
  Button,
  CheckBox,
  InputBox,
  MutedText,
  Spacer,
} from "../../components";

const AddBanner = () => {
  const dispatch = useDispatch();
  const handleModal = () => {
    dispatch({ type: ADD_BANNER_MODAL });
  };
  return (
    <div className="modalWrapper">
      <div className="modalArea">
        <i class="fa-solid fa-xmark  closeIcon" onClick={handleModal}></i>
        <Spacer height={20} />
        <p>Title</p>
        <Spacer height={5} />
        <InputBox placeholder="title" />
        <Spacer height={20} />
        <div>
          <input type="file" name="" id="" />
        </div>
        <Spacer height={5} />
        <MutedText text="Recommended image size is (1400x600)" />
        <Spacer height={20} />
        <p>Banner Type</p>
        <Spacer height={20} />
        <InputBox placeholder="Banner Type" />
        <Spacer height={20} />
        <p>Status</p>
        <Spacer height={5} />
        <CheckBox name="Publish" />
        <Spacer height={20} />
        <Button btnName="save" />
      </div>
    </div>
  );
};

export default AddBanner;
