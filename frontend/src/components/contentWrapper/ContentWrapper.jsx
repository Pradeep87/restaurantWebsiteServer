import React from "react";

const ContentWrapper = ({ children ,dashboard,fullScreen}) => {
  return (
    <div
      style={{
        width:  dashboard? "80%" : fullScreen?"100%"   :"65%",
        display: "flex",
        justifyContent: "space-between",
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
