import React from 'react'
import './storeSettings.css'
import Tabs from './tabs/Tabs'
import { Spacer } from '../../../../components'

const StoreSettings = () => {
  return (
    <div className='storeSettings'>
         <Spacer height={50} />
      <Tabs/>
      </div>
  )
}

export default StoreSettings