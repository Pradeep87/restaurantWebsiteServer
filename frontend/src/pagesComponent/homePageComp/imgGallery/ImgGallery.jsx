import React from "react";
import "./imgGallery.css";
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'

const ImgGallery = () => {
  return (
    <>
    <ContentWrapper>
      <div className="imgGallery">
        <div>
          <img
            src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/c/y/p2441-165060903562624b8bf1fa7.jpg?w=400"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSDRhLe47ebu5BwYevDbb3f4yEymfVZRIXYw&usqp=CAU"
            alt=""
          />
          <img
            src="https://ziphaccp.com/assets/images/topiccluster/food-preparation-basics-for-growing-restaurants-800x400.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000"
            alt=""
          />
          <img
            src="https://post.healthline.com/wp-content/uploads/2020/09/healthy-eating-ingredients-732x549-thumbnail.jpg"
            alt=""
          />
        </div>
      </div>
    </ContentWrapper>
    </>
  );
};
export default ImgGallery;
