import React from 'react'
import './cartPage.css'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';

const CartPage = () => {
  return (<>
  <div className="cartPage">
   <ContentWrapper>
     <h1> items in cart </h1>
   </ContentWrapper>
  </div>
    </>
  )
}

export default CartPage