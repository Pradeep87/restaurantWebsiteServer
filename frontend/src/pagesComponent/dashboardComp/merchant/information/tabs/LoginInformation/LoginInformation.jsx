import React from "react";
import { InputBox, Button, Spacer } from "../../../../../../components";

const LoginInformation = () => {
  return (
    <div className="updateInformation">
      <div className="flexCenter">
        <InputBox
          placeholder="First Name"
          width={350}
          icon={<i class="fa-solid fa-circle-user"></i>}
        />
        <InputBox
          placeholder="Last Name"
          width={350}
          icon={<i class="fa-solid fa-circle-user"></i>}
        />
      </div>
      <div className="flexCenter">
        <InputBox
          placeholder="Email Address"
          width={350}
          icon={<i class="fa-solid fa-envelope"></i>}
        />
        <InputBox
          placeholder="Contact Number"
          width={350}
          icon={<i class="fa-solid fa-square-phone"></i>}
        />
      </div>
      <div className="flexCenter">
        <InputBox
          placeholder="User Name"
          width={350}
          icon={<i class="fa-solid fa-user"></i>}
        />
        <InputBox
          placeholder="New Password"
          width={350}
          icon={<i class="fa-solid fa-eye-slash"></i>}
        />
      </div>
      <InputBox
        placeholder="Confirm Password"
        width={350}
        icon={<i class="fa-solid fa-eye-slash"></i>}
      />
      <Spacer height={20} />
      <Button btnName={"Save"} width={25} />
    </div>
  );
};

export default LoginInformation;
