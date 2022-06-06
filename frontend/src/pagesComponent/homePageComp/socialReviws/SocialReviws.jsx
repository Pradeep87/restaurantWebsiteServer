import React from "react";
import "./socialReviws.css";
import googleReviw from "../../../images/googleReview.svg";
import faceBookReview from "../../../images/faceBookReview.svg";
import YogaAlliance from "../../../images/yogaAlliance.svg";
import TripAdvisor from "../../../images/tripAdvisor.svg";
import BookYoga from "../../../images/bookYoga.svg";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const SocialPlateForm = ({ icon }) => {
  return (
    <>
      <div className="plateform">
        <img src={icon} alt="" />
      </div>
    </>
  );
};

const SocialSharing = () => {
  return (
    <>
      <ContentWrapper>
        <div className="SocialSharing">
          <SocialPlateForm icon={googleReviw} />
          <SocialPlateForm icon={faceBookReview} />
          <SocialPlateForm icon={YogaAlliance} />
          <SocialPlateForm icon={TripAdvisor} />
          <SocialPlateForm icon={BookYoga} />
        </div>
      </ContentWrapper>
    </>
  );
};

export default SocialSharing;
