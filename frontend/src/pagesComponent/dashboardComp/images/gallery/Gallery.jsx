import React from 'react'
import {
  ContentWrapper,
  Spacer,
} from ".././../../../components";
const Gallery = () => {
  return (
    <div>
    <Spacer height={50} />
    <ContentWrapper dashboard={true}>
        <h2>Gallery List</h2>
      <div className="addNewIcon">
     <input type="file" name="choose images" id="" />
      </div>
    </ContentWrapper>
    <Spacer height={20} />
    <ContentWrapper dashboard={true}>
      <div className="ordersLimitList">
       <h1>images preview</h1>
      </div>
    </ContentWrapper>
  </div>
  )
}

export default Gallery