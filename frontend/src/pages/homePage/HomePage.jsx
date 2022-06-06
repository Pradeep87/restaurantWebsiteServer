import Header from "../../pagesComponent/homePageComp/header/Header";
import ImgGallery from "../../pagesComponent/homePageComp/imgGallery/ImgGallery";
import SocialSharing from "../../pagesComponent/homePageComp/socialReviws/SocialReviws";
// import GoogleMap from '../../pagesComponent/googleMap/GoogleMap';
import Tabs from '../../pagesComponent/homePageComp/Tabs/Tabs'
import SpacialFood from "../../pagesComponent/homePageComp/specialFood/SpacialFood";
import { Spacer } from "../../components";

const HomePage = () => {
  return (
    <>
      <Spacer height={70} />
      <ImgGallery />
      <Spacer height={20} />
      <Tabs />
      <Spacer height={20} />
      <SpacialFood/>
      <Spacer height={100} />
      <SocialSharing />
      <Spacer height={100} />
      <Header />
      {/* <GoogleMap/> */}
    </>
  );
};

export default HomePage;
