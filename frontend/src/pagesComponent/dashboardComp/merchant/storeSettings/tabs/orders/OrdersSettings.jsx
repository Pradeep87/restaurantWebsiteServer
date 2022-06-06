import React from 'react'
import { Spacer,MutedText,InputBox,Button  } from '../../../../../../components'

const OrdersSettings = () => {
  return (
    <div>
<MutedText text="Define how many minutes that order set to critical order and needs attentions." />
<Spacer height={10}/>
<p>Critical Minutes</p>
 <Spacer height={20}/>
 <InputBox placeholder="Critical Minutes" />

<Spacer height={10}/>
<MutedText text="Define how many minutes that order will auto rejected." />
<Spacer height={10}/>
<InputBox placeholder="Reject Order Minutes" />
<Spacer height={20}/>
<Button btnName="save" />

    </div>
  )
}

export default OrdersSettings