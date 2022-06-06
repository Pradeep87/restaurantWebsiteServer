import React,{useState} from 'react'
import './informationTabs.css'
import { ContentWrapper } from '../../../../../components';
import MerchantInformation from './MerchantInformation/MerchantInformation';
import LoginInformation from './LoginInformation/LoginInformation';
import Address from './Address/Address';

const tabContent = [
    "Merchant Information",
    "Login Information",
    "Address"
    
  ];
  


const InformationTab = () => {
    const [active, setactive] = useState(0);
    const [activeTab, setactiveTab] = useState(tabContent[active])
    const setState = (idx,data) => {
      setactive(idx);
      setactiveTab(data)
    };
    return (<>
      <ContentWrapper dashboard={true} >
      <div className=" informationTabs aboutInformation "   >
        <ul>
          {tabContent.map((data, idx) => (
            <li
              key={idx}
              onClick={() => setState(idx,data)}
              className={active === idx ? "activeInfoTab" : ""}
            >
              {data}
            </li>
          ))}
        </ul>
        <div className={active === 0 ? "activeTabContent informationTabsContent" : " informationTabsContent tabsContent"}>
        <h2>{activeTab}</h2>
<MerchantInformation/>
        </div>
        <div className={active === 1 ? "activeTabContent informationTabsContent" : "tabsContent"}>
        <h2>{activeTab}</h2>
       <LoginInformation/>
        </div>
        <div className={active === 2 ? "activeTabContent informationTabsContent" : "tabsContent"}>
        <h2>{activeTab}</h2>
<Address/>
        </div>
       
      </div>
      </ContentWrapper>
    </>
    );
}

export default InformationTab