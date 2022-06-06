import React from 'react'
import { useDispatch } from 'react-redux'
import { ADD_PAGE_MODAL } from '../../../../redux/constants/Constants'
import { ContentWrapper, Spacer, MutedText } from '.././../../../components'


const Pages = () => {

  const dispatch=useDispatch()
  const openPageModal=()=>{
dispatch({type:ADD_PAGE_MODAL})
  }
  return (
    <div>
      <Spacer height={50} />
      <ContentWrapper dashboard={true}>
        <h2>Pages List</h2>
        <div className="addNewIcon">
          <i class="fa-solid fa-circle-plus" onClick={openPageModal}></i>
          <h2>Add New</h2>
        </div>
      </ContentWrapper>
      <Spacer height={20} />
      <ContentWrapper dashboard={true}>
        <div className="ordersLimitList ">
          <ul className="ListHeader">
            <li>#</li>
            <li>Title</li>
            <li>Actions</li>
          </ul>
          <Spacer height={20} />
          <ul className="listContent">
            <li>2</li>
            <li>
              <div>
                <p>
                  Contact Us{' '}
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
                <MutedText text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quibusdam voluptate et delectus impedit laboriosam? Quo illo eum dolores saepe!" />
               
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

export default Pages