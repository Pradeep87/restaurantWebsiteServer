import React from 'react'
import { MutedText,CheckBox,InputBox,Button,Spacer } from '../../../../../../components'


const Notification = () => {
  return (
    <div>
        <CheckBox name="Enabled Notification" />
    <Spacer height={10}/>
    <MutedText text="Email and Mobile number who will receive notifications like new order and cancel order.
Multiple email/mobile must be separated by comma." />
     <Spacer height={20}/>
 <Spacer height={10}/>
    <InputBox placeholder="Email Address" />
    <Spacer height={20}/>
    <InputBox placeholder="Mobile Number" />
    <Spacer height={20}/>
<Button btnName="save" />
  
        </div>
  )
}

export default Notification