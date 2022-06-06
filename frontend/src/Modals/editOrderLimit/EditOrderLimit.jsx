import React, { useState } from "react";
import "./editOrderLimit.css";
import {
  Button,
  InputBox,
  MutedText,
  SelectBox,
  Spacer,
} from "../../components";
import { useDispatch } from "react-redux";
import { EDIT_ORDER_LIMIT_MODAL } from "../../redux/constants/Constants";
import { addOrderLimit } from "../../redux/actions/actions";
import {v4} from 'uuid'

const daysData = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const orderStatusData = [
  "Accepted",
  "Cancelled",
  "Complete",
  "Delayed",
  "Delivered",
  "Delivery Failed",
  "Delivery On Its Way",
  "New",
  "Ready For Pickup",
  "Rejected",
];

const EditOrderLimit = () => {
  const dispatch = useDispatch();

  const [days, setDays] = useState([]);
  const [orderStatus, setorderStatus] = useState([]);
  const [selecOptions, setSelecOptions] = useState({
    draft:"",
    delivery:""
  })
const [input, setinput] = useState({
  startTime:"",
  endTime:"",
  noOrder:""
})
  const handleDayData = (data) => {
    if (days.length !== 0) {
      const found = days.some((item) => item === data);
      if (found) return;
    }
    let arr = [];
    arr.push(...days, data);
    setDays(arr);
  };
  const handleOrderStatus = (data) => {
    if (orderStatus.length !== 0) {
      const found = orderStatus.some((item) => item === data);
      if (found) return;
    }
    let arr = [];
    arr.push(...orderStatus, data);
    setorderStatus(arr);
  };
  const deleCuisine = (data) => {
    const newList= days.filter((elem)=>elem!==data )
    setDays(newList)
  };
  const handleModal = () => {
    dispatch({ type: EDIT_ORDER_LIMIT_MODAL });
  };
const deleOrderStatus=(data)=>{
  const newList= orderStatus.filter((elem)=>elem!==data )
  setorderStatus(newList)
}
const handleSelectBox=(data,name)=>{
setSelecOptions((preVal)=>{return{ ...preVal,[name]:data }})
}
const handleCreate=()=>{
  dispatch(addOrderLimit({
    id:v4(),
    days:days,
  orderStatus:orderStatus,
...selecOptions,
...input
}))
console.log("hello");

dispatch({type:EDIT_ORDER_LIMIT_MODAL})
}
const handleInput=(e)=>{
  const name=e.target.name;
  const value=e.target.value
  setinput((prevVal)=>{return{...prevVal,[name]:value}})
}
return (
    <div className="modalWrapper">
      <div className="modalArea">
        <i class="fa-solid fa-xmark  closeIcon" onClick={handleModal}></i>
        <Spacer height={20} />
        <p>Transaction Type</p>
        <Spacer height={5} />
        <SelectBox
          options={["Delivery", "Pickup", "dinein"]}
          placeholder="Delivery"
          name='delivery'
          setOptions={handleSelectBox}
        />
        <Spacer height={20} />
        <p>Days</p>
        <Spacer height={5} />
        <div className="cuisinContainer">
          {days.map((data, idx) => (
            <div key={idx} className="cuisineBox">
              <p>{data}</p>
              <i
                className="fa-solid fa-xmark"
                onClick={() => deleCuisine(data)}
              ></i>
            </div>
          ))}
        </div>
        <div className="cuisine">
          <SelectBox
            placeholder="Add Cuisine"
            name="cuisine"
            setOptions={handleDayData}
            options={daysData}
          />
        </div>
        <Spacer height={20} />
        <div className="inputsInLine">
          <InputBox placeholder={"Start Time"}
           onChange={handleInput}
           value={input.startTime}
           inputName="startTime"
          width={250} />
          <InputBox placeholder={"End Time"} 
            onChange={handleInput}
            value={input.endTime}
            inputName="endTime"
          width={250} />
        </div>
        <Spacer height={20} />
        <InputBox placeholder={"Number of Order Allowed"}
        onChange={handleInput}
        value={input.noOrder}
        inputName="noOrder"
        width={250} />
        <Spacer height={20} />
        <p>Order Status</p>
        <Spacer height={5} />
        <div className="cuisinContainer">
          {orderStatus.map((data, idx) => (
            <div key={idx} className="cuisineBox">
              <p>{data}</p>
              <i
                className="fa-solid fa-xmark"
                onClick={() => deleOrderStatus(data)}
              ></i>
            </div>
          ))}
        </div>
        <div className="cuisine">
          <SelectBox
            placeholder="Add Cuisine"
            name="cuisine"
            setOptions={handleOrderStatus}
            options={orderStatusData}
          />
        </div>
        <Spacer height={5} />
        <MutedText text="Status that will count the existing order, if empty will use all status." />
        <Spacer height={20} />
        <p>Status</p>
        <Spacer height={5} />
        <SelectBox
          options={["Draft", "Panding For Review", "Publish"]}
          placeholder="Draft"
          name='draft'
          setOptions={handleSelectBox}
        />
        <Spacer height={20} />


        <Button btnName="save" 
        onClick={handleCreate} />
      </div>
    </div>
  );
};

export default EditOrderLimit;
