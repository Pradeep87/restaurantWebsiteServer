import React from 'react'
import './orderLimit.css'
import { ContentWrapper, Spacer, MutedText } from '.././../../../components'
import { EDIT_ORDER_LIMIT_MODAL } from '../../../../redux/constants/Constants'
import { useDispatch, useSelector } from 'react-redux'

const OrderLimit = () => {
  const dispatch = useDispatch()
  const { editOrderLimit } = useSelector((state) => state.appReducer)
  console.log(editOrderLimit)
  const openEditModal = () => {
    dispatch({ type: EDIT_ORDER_LIMIT_MODAL })
  }
  return (
    <div>
      <Spacer height={50} />
      <ContentWrapper dashboard={true}>
        <h2>Order Limit</h2>
        <div className="addNewIcon" onClick={openEditModal} >
          <i class="fa-solid fa-circle-plus" ></i>
          <h2>Add New</h2>
        </div>
      </ContentWrapper>
      <Spacer height={20} />
      <ContentWrapper dashboard={true}>
        <div className="ordersLimitList ">
        <Spacer height={20} />
          <ul className="ListHeader">
            <li>#</li>
            <li>Days/Time</li>
            <li>Actions</li>
          </ul>
          <Spacer height={20} />
          <ul className="listContent">
            <li>2</li>
            <li>
              <div>
                <p>
                  PickUp{' '}
                  <span
                    style={{
                      background: 'yellow',
                      padding: '3px',
                      borderRadius: '3px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                    }}
                  >
                    Publish
                  </span>{' '}
                </p>
                <MutedText text="3:04 PM to 3:05 AM " />
                <MutedText text="Nos. Order Allowed. 10 " />
                <MutedText text="Wednesday" />
                <MutedText text="Accepted" />
              </div>
            </li>
            <li>
              <i class="fa-solid fa-pencil editIcon "></i>
              <i class="fa-solid fa-trash deleteIcon "></i>
            </li>
          </ul>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default OrderLimit
