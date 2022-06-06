import React from 'react'
import { MutedText,InputBox,Button,SelectBox,Spacer } from '../../../../../../components'

const GoogleMapsApi = () => {
  return (
    <div>
    <p>Choose Map Provider</p>
    <Spacer height={10}/>
    <MutedText text="Notice : this section need to be fill only if you have single website restaurant." />
    <Spacer height={10}/>
 <SelectBox options={["Google Maps (Default)","MapBOX"]} 
 placeholder="Google maps (default)"
 />
     <Spacer height={20}/>
 <p>Google Maps</p>
 <Spacer height={10}/>
    <MutedText text="Geocoding API Key"/>
    <Spacer height={10}/>
    <InputBox placeholder="*********" />
    <Spacer height={20}/>
    <MutedText text="Google Maps JavaScript API"/>
    <Spacer height={10}/>
    <InputBox placeholder="********" />
    <Spacer height={20}/>
    <p>Mapbox</p>
    <Spacer height={10}/>
    <MutedText text="Mapbox Access Token"/>
    <Spacer height={10}/>
    <InputBox placeholder="token" />
    <Spacer height={20}/>
    <Button btnName="Save" width={100} />
        </div>
  )
}

export default GoogleMapsApi