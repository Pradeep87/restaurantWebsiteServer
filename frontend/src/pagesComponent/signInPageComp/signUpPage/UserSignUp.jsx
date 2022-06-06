import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../../../redux/actions/actions";
import { Spacer,Button,Divider,InputBox } from "../../../components";

const UserSignUp = ({setsignInScreen}) => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
const [input, setInput] = useState({
  fullName:"",
  gmail:""
})
const handleInput=(e)=>{
const name=e.target.name;
const value=e.target.value;
setInput((prevVal)=> {return{ ...prevVal,[name]:value}})
}
const createAccount=()=>{
dispatch(userLogin(input))
navigate("/",{replace:true})
}
  return (
    <div className="userSignIn">
    <div className="userIcon">
      <h1>Register</h1>
    </div>
    <Spacer height={20} />
    <InputBox
      placeholder="Full Name"
      inputName="fullName"
      value={input.fullName}
      onChange={handleInput}
      icon={<i className="fa-solid fa-user"></i>}
    />
    <Spacer height={20} />
    <InputBox
      placeholder="Gmail"
      inputName="gmail"
      value={input.gmail}
      onChange={handleInput}
      icon={<i className="fa-solid fa-envelope"></i>}
    />
    <Spacer height={20} />
    <Button btnName="Create Account"
    onClick={createAccount}
    width={100} height={40} />
    <Spacer height={40} />
    <h1 style={{ textAlign: "center" }}>or</h1>
    <Divider />
    <Spacer height={40} />
    <Button btnName="Continue With Google"
    width={100} height={40} />
    <Spacer height={20} />
    <div className="createNewAccount">
      <p>Already Have An Account ?</p>
      <span onClick={() => setsignInScreen(true)}>Sign In</span>
    </div>
  </div>
  )
}

export default UserSignUp



