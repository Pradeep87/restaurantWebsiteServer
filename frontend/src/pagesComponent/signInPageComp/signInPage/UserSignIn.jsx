import React from "react";
import "./userSignIn.css";
import { Spacer,Button,Divider,InputBox } from "../../../components";

const UserSignIn = ({ setsignInScreen }) => {
  return (
    <div className="userSignIn">
      <div className="userIcon">
        <h1>Sign In</h1>
      </div>
      <Spacer height={20} />
      <InputBox
        placeholder="Phone Number"
        inputName="Phone Number"
        phoneCode={"+91"}
      />
      <Spacer height={20} />
      <Button btnName="Send OTP" width={100} height={40} />
      <Spacer height={40} />
      <h1 style={{ textAlign: "center" }}>or</h1>
      <Divider />
      <Spacer height={40} />
      <Button btnName="Continue With  Google" width={100} height={40} />
      <Spacer height={20} />
      <Button btnName="Continue With Facebook" width={100} height={40} />
      <Spacer height={20} />
      <div className="createNewAccount">
        <p>New here ?</p>
        <span onClick={() => setsignInScreen(false)}>Create New Account</span>
      </div>
    </div>
  );
};

export default UserSignIn;
