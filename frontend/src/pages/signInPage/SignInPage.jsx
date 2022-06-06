import React, { useState } from "react";
import "./signIn.css";
import UserSignUp from "../../pagesComponent/signInPageComp/signUpPage/UserSignUp";
import UserSignIn from "../../pagesComponent/signInPageComp/signInPage/UserSignIn";

const SignInPage = () => {
  const [signInScreen, setsignInScreen] = useState(true);
  return (
    <div className="signInPage">
      {signInScreen ? (
        <UserSignIn setsignInScreen={setsignInScreen} />
      ) : (
        <UserSignUp setsignInScreen={setsignInScreen} />
      )}
    </div>
  );
};

export default SignInPage;
