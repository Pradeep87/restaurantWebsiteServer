import React from 'react'
import {Spacer,ContentWrapper,MutedText}from '../../../.././../../components'

const StoreHours = () => {
  const openEditModal=()=>{

  }
  return (
    <div>
      <Spacer height={50} />
      <ContentWrapper dashboard={true}>
        <h2>Store Hourse</h2>
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
            <li>Name</li>
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
                  Open
                  </span>{' '}
                </p>
                <Spacer height={10} />
                <MutedText text="3:04 PM to 3:05 AM " />
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

export default StoreHours