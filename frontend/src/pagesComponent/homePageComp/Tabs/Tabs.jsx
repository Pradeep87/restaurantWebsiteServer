import React, { useState } from "react";
import "./tabs.css";
import OrderOnline from "./orderOnline/OrderOnline";
import OverView from "./overView/OverView";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
const tabContent = [
  "Order Online",
  "Book a Table",
  "Menu",
  "Review",
  "Photos",
  "Overview",
];

const ShareListing = () => (
  <div className="shareListing">
    <div className="shareIcon">
      <i className="fa-solid fa-share"></i>
      <span>Share This Listing</span>
    </div>
    <div className="socialIcons">
      <div>
        <i className="fa-brands fa-facebook-f"></i>
        <span>Facebook</span>
      </div>
      <div>
        <i className="fa-brands fa-twitter"></i>
        <span>Twitter</span>
      </div>
      <div>
        <i className="fa-regular fa-envelope"></i>
        <span>Email</span>
      </div>
      <div>
        <i className="fa-solid fa-link"></i>
        <span>Get Link</span>
      </div>
    </div>
  </div>
);

const Tabs = () => {
  const [active, setactive] = useState(0);
  const setState = (idx) => {
    setactive(idx);
  };
  return (
    <ContentWrapper>

    <div className="tabs">
      <ul>
        {tabContent.map((data, idx) => (
          <li
            key={idx}
            onClick={() => setState(idx)}
            className={active === idx ? "activeTab" : ""}
          >
            {data}
          </li>
        ))}
        <ShareListing />
      </ul>

      <div className={active === 0 ? "activeTabContent" : "tabsContent"}>
        <OrderOnline />
      </div>
      <div className={active === 1 ? "activeTabContent" : "tabsContent"}>
        <h1>tab two</h1>
      </div>
      <div className={active === 2 ? "activeTabContent" : "tabsContent"}>
        <h1>tab three</h1>
      </div>
      <div className={active === 3 ? "activeTabContent" : "tabsContent"}>
        <h1>tab four</h1>
      </div>
      <div className={active === 4 ? "activeTabContent" : "tabsContent"}>
        <h1>tab five</h1>
      </div>
      <div className={active === 5 ? "activeTabContent" : "tabsContent"}>
        <OverView />
      </div>
    </div>
    </ContentWrapper>
  );
};

export default Tabs;
