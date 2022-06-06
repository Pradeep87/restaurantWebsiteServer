import React from "react";
import {
  InputBox,
  Button,
  SelectBox,
  Spacer,
  CheckBox,
} from "../../../../../../components";

const options = ["highest price", "sumup divided by two"];
const defaultTip = [1, 2, 3, 4, 5];
const BasicSettings = () => {
  return (
    <div className="updateInformation">
      <div>
        <InputBox
          placeholder="Tax Number "
          width={300}
          icon={<i class="fa-solid fa-circle-user"></i>}
        />
        <Spacer height={5} />
        <p style={{ fontSize: "12px", color: "gray" }}>
          ( this will appear in receipt )
        </p>
      </div>
      <Spacer height={20} />
      <p>Two Flavor Option</p>
      <Spacer height={5} />
      <SelectBox options={options} placeholder="please select" />
      <Spacer height={20} />
      <InputBox
        placeholder="Website Address"
        icon={<i class="fa-solid fa-square-phone"></i>}
      />
      <Spacer height={20} />
      <div>
        <CheckBox name="Close Store" />
        <Spacer height={10} />
        <CheckBox name="Enabled Voucher" />
        <Spacer height={10} />
        <CheckBox name="Enabled Tips" />
      </div>
      <Spacer height={20} />
      <p>Default Tips</p>
      <Spacer height={5} />
      <SelectBox options={defaultTip} placeholder="please select" />
      <Spacer height={20} />
      <Button btnName={"Save"} width={15} />
    </div>
  );
};

export default BasicSettings;
