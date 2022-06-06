import React from 'react'
import { Button, SelectBox ,Spacer} from '../../../../../../components'

const SearchMode = () => {
  return (
    <div>
        <p  >Set Specific Country</p>
        <Spacer height={20}/>
        <span style={{fontSize:"12px",
    color:"gray"}} >Notice : this section need to be fill only if you have single website restaurant.</span>
        <Spacer height={20} />
        <SelectBox placeholder="United State" options={["India","US","uk"]} />
        <Spacer height={20}  />
        <Button btnName="Save" width={100} />
    </div>

  )
}

export default SearchMode