import React from 'react'
import { Button, CheckBox,Divider,SelectBox,Spacer } from '../../../../../../components'

const Taxes = () => {
  return (
    <div>
        <Spacer height={10}/>
          <CheckBox name="Tax Enabled" />
          <Spacer height={20}/>
          <Divider/>
          <Spacer height={20}/>

          <CheckBox name="Tax On Service Fee" />
          <Spacer height={20}/>

          <CheckBox name="Tax On Delivery Fee" />
          <Spacer height={20}/>

          <CheckBox name="Tax On Packaging fee" />
          <Spacer height={50}/>

<div>
    <p>Tax Type</p>
    <Spacer height={10}/>

    <SelectBox options={["Multiple Tax","Standereds"]} placeholder="Standared" />
    <Spacer height={20}/>

</div>
<Button btnName="Add New Tax" />
<Spacer height={20} />
<Button btnName="Save"  width={100} />
    </div>


  )
}

export default Taxes