import React from "react";
import "./newOrders.css";
import {
  Button,
  Spacer,
  ContentWrapper,
  MutedText,
} from "../../../../components";
import cookingImg from '../../../../images/cooking.png'




const OrderDetailSection=()=>{
return(
  <div className="orderDetailSection">
  <div className="userDetails">
    <Spacer height={20} />
    <Button btnName="Accept Order" />
    <Spacer height={20} />

    <div className="aboutOrder">
      <div>
      <div className="cutomerImage">
      <img src={cookingImg} alt="" />
      <div>
        <p>Order #11628</p>
      <span>place on Thus, june 2 2022 at 4:01 Am</span>
      </div>
      </div>
        <p className="orderStatus"> Completed</p>
      </div>
    </div>
    <Spacer height={20} />
    <div className="aboutCustomer">
      <div className="cutomerImage">
      <img src={cookingImg} alt="" />
      <div>
      <p>Customer name</p>
      <Spacer height={5} />
      <MutedText text="place" />
      <Spacer height={5} />
      <MutedText text="gmail" />
      <Spacer height={5} />
      <MutedText text="phone" />
      <Spacer height={5} />
      <p>2orders</p>
      </div>
      </div>
    </div>
    <Spacer height={20} />
    <div className="aboutDelivery">

<div className="cutomerImage">
<i class="fa-solid fa-location-dot"></i>
<div>

      <p>delivery information</p>
      <MutedText text="place" />
      <Spacer height={5} />
      <MutedText text="Address" />
      <Spacer height={5} />
      <a href="/dashboard">get direction</a>
</div>
</div>
    
    </div>
    <Spacer height={20} />
    <table className="orderTypeTable">
      <tr>
        <td>Order Type</td>
        <td>
          <p className="orderStatus"> Delivery</p>
        </td>
      </tr>
      <tr>
        <td>Delivery date/time</td>
        <td> asap</td>
      </tr>
      <tr>
        <td>include utensils</td>
        <td> </td>
      </tr>
      <tr>
        <td>Payment</td>
        <td>paid by cash on delivery </td>
      </tr>
      <tr>
        <td>Payment</td>
        <td>paid by cash on delivery </td>
      </tr>
      <tr>
        <td>Payment Status</td>
        <td>Non Paid </td>
      </tr>
    </table>
    <Spacer height={20} />
    <table className="orderTypeTable">
      <tr>
        <td>date</td>
        <td>payment</td>
        <td>Description</td>
        <td>Ammount</td>
        <td>status</td>
      </tr>
      <tr>
        <td>date & time </td>
        <td>cod</td>
        <td>payment refrence</td>
        <td>1530</td>
        <td>non paid</td>
      </tr>
    </table>
  </div>
  <div className="orderSummry">
    <p>Summery</p>
    <Spacer height={5} />
    <div className="foodSumry" >
      <img src="" alt="" />
      <p>1x 6-pc. Chicken McShare Box $333.00</p>
      <p>price</p>
    </div>
    <Spacer height={20} />

      <table className=" summeryTable">
        <tr>
          <td>Sub total (1 items)</td>
          <td>$333.00</td>
        </tr>
        <tr>
          <td>service fee</td>
          <td>$333.00</td>
        </tr>
        <tr>
          <td>delivery fee</td>
          <td>$333.00</td>
        </tr>
        <tr>
          <td>iss 2%</td>
          <td>$333.00</td>
        </tr>
        <tr>
          <td>courier tip</td>
          <td>$333.00</td>
        </tr>
      </table>
  </div>
</div>
)
}

const OrderSection=()=>{
  return(
    <div className="orderSection">
    <Spacer height={20}/>
    <div className="orderCard">
      <div className="orderCardCutomer">
        <p>Customer Name</p>
        <span>
          1 item <span>Pos</span>
        </span>
        <p className="orderNumber">Order #11628</p>
      </div>
      <div className="orderCardCutomerLeft">
        <p className="orderStatus">Completed</p>
        <i class="fa-solid fa-angle-right"></i>
      </div>
    </div>
  </div>
  )
}

const NewOrders = () => {
  return (
    <>
      <Spacer height={30} />
      <ContentWrapper fullScreen={true}>
        <div className="ordersTop">
          <h2>Orders As Of Today thu, june 2,2022 </h2>
          <div>
            <i class="fa-regular fa-bell bellIcon"></i>
            <Button
              btnName="accepting orders"
              icon={<i class="fa-regular fa-circle-check"></i>}
            />
          </div>
        </div>
      </ContentWrapper>
      <Spacer height={30} />
      <ContentWrapper fullScreen={true}>
        <div className="orderPage">
         <OrderSection/>
         <OrderDetailSection/>
        </div>
      </ContentWrapper>
    </>
  );
};

export default NewOrders;
