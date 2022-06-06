import React, { useState } from "react";
import { ContentWrapper, Spacer } from "../../../../../components";
import BasicSettings from "./basicSettings/BasicSettings";
import StoreHours from "./storeHours/StoreHours";
import Taxes from "./Taxes/Taxes";
import SearchMode from "./searchMode/SearchMode";
import LoginSignUp from "./logInSignUp/LoginSignUp";
import SocialSettings from "./socialSettings/SocialSettings";
import GoogleRecaptcha from "./googleRecaptcha/GoogleRecaptcha";
import GoogleMapsApi from "./googleMapsApi/GoogleMapsApi";
import Notification from "./notification/Notification";
import OrdersSettings from "./orders/OrdersSettings";

const tabContent = [
  "Basic Settings",
  "Store Hourse",
  "Taxes",
  "Search Mode",
  "Login & SignUp",
  "Social Settings",
  "Google Recaptcha",
  "Maps API keys",
  "Notification",
  "Orders Settings",
];

const Tabs = () => {
  const [active, setactive] = useState(0);
  const [activeTab, setactiveTab] = useState(tabContent[active])
  const setState = (idx) => {
    setactive(idx);
    setactiveTab(tabContent[idx])
  };
  return (
  <>
  
    <h2 style={{width:"40%",margin:"auto"}} >{activeTab}</h2>
<Spacer height={20} />
    <ContentWrapper dashboard={true} >
      <div className=" informationTabs ">
        <ul>
          {tabContent.map((data, idx) => (
            <li
            key={idx}
            onClick={() => setState(idx)}
            className={active === idx ? "activeInfoTab" : ""}
            >
              {data}
            </li>
          ))}
        </ul>
        <div
          className={
            active === 0
            ? "activeTabContent informationTabsContent"
            : " informationTabsContent tabsContent"
          }
        >
          <BasicSettings />
        </div>
        <div
          className={
            active === 1
            ? "activeTabContent informationTabsContent"
              : "tabsContent"
          }
        >
          <StoreHours />
        </div>
        <div
          className={
            active === 2
              ? "activeTabContent informationTabsContent"
              : "tabsContent"
            }
            >
          <Taxes />{" "}
        </div>

        <div
          className={
            active === 3
              ? "activeTabContent informationTabsContent"
              : "tabsContent"
            }
            >
          <SearchMode />
        </div>

        <div
          className={
            active === 4
            ? "activeTabContent informationTabsContent"
            : "tabsContent"
          }
          >
          <LoginSignUp />
        </div>

        <div
          className={
            active === 5
            ? "activeTabContent informationTabsContent"
            : "tabsContent"
          }
          >
          <SocialSettings />
        </div>

        <div
          className={
            active === 6
            ? "activeTabContent informationTabsContent"
              : "tabsContent"
          }
        >
          <GoogleRecaptcha />
        </div>

        <div
          className={
            active === 7
              ? "activeTabContent informationTabsContent"
              : "tabsContent"
            }
            >
          <GoogleMapsApi />
        </div>

        <div
          className={
            active === 8
              ? "activeTabContent informationTabsContent"
              : "tabsContent"
            }
            >
          <Notification />
        </div>

        <div
          className={
            active === 9
            ? "activeTabContent informationTabsContent"
              : "tabsContent"
            }
        >
          <OrdersSettings />
        </div>
      </div>
    </ContentWrapper>
            </>
  );
};

export default Tabs;
