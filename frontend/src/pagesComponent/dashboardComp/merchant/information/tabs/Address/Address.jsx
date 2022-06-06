import React from 'react'
import { InputBox,Button } from '../../../../../../components'

const Address = () => {
  return (
    <div className="updateInformation">
    <div style={{marginTop:"20px"}} >
    <InputBox
      placeholder="Address"
      icon={<i class="fa-solid fa-location-dot"></i>}
    />
    </div>
    <div className="flexCenter">
      <InputBox
        placeholder="Latitude"
        width={300}
        icon={<i class="fa-solid fa-map-location-dot"></i>}
      />
      <InputBox
        placeholder="Lontitude"
        width={300}
        icon={<i class="fa-solid fa-map-location-dot"></i>}
      />
    </div>
   <div className='addressParagraph' ><p>
   Get your address geolocation via service like <a href="https://www.maps.ie/coordinates.html" target="_blank" rel="noopener noreferrer">https://www.maps.ie/coordinates.html</a>  or <a href=" https://www.latlong.net/" target="_blank" rel="noopener noreferrer"> https://www.latlong.net/</a>, entering invalid coordinates will make your store not available for ordering
       </p></div>
 
    <div className="flexCenter">
      <InputBox
        placeholder="Delivery Distance Coverd"
        width={300}
        icon={<i class="fa-solid fa-eye-slash"></i>}
      />
      <InputBox
        placeholder="Select Box mils kilomiters"
        width={300}
        icon={<i class="fa-solid fa-eye-slash"></i>}
      />
    </div>
    <Button btnName={'Save'} width={15} />
  </div>
  )
}

export default Address