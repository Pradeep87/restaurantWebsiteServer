import React,{useState} from "react";
import './selectBox.css'

const SelectBox = ({ options,setOptions,placeholder,name }) => {
  const [data, setdata] = useState("")
  const [show, setShow] = useState(false)

  const handleSetData=(data,name)=>{
setdata(data)
setShow(!show)
setOptions(data,name)
  }
  return (
    <div className="selectBox" onClick={()=>setShow(!show)} >
      <span onClick={()=>setShow(!show)} >{data||placeholder } 
       </span>
      <ul className={show?"showList":"hideList"}>
        {options.map((data) => (
          <li onClick={()=> handleSetData(data,name)}
           >{data}</li>
        ))}
      </ul>
    </div>
  );
};

export default SelectBox;
