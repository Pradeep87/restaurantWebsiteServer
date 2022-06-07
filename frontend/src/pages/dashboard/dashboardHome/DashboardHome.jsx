import React from 'react'
import './dashboardHome.css'
import {Spacer} from '../../../components'




const TotalItemsCard = ({  total,
  inPercent, heading }) => {
    const Gain=80
  return (

<div className="frist">
        <div
          className="pychart"
          style={{
            background: `radial-gradient(circle closest-side, transparent 100%, transparent 0),
             conic-gradient( from 360deg, #00c49a 0, #00c49a ${Gain}%, #F5F5F5 0,#F5F5F5 ${
              100 - Gain
            }%)`,
          }}
        ></div>
        <div className="second">
          <div>
            <span>{total}</span>
            <p>{heading}</p>
          </div>
        </div>
      </div>

  )
}

const ThisWeekCard = ({ heading, ammount }) => {
  return (
    <div className="thisWeekCard">
      <div className="saleIcon">
        <i class="fa-solid fa-dollar-sign"></i>
      </div>
      <div>
        <span>{heading}</span>
        <p> ${ammount}</p>
      </div>
    </div>
  )
}

const TodayInformationCard = ({ number, heading, id }) => {
  return (
    <div className="todayInformationCard">
      <span
        style={{
          color:
            id === 1
              ? 'rgba(239,79,95, 1)'
              : id === 2
              ? 'green'
              : id === 3
              ? 'blue'
              : id === 4
              ? '#FFC300 '
              : '',
          fontSize: '20px',
        }}
      >
        {number}
      </span>
      <p>{heading}</p>
    </div>
  )
}

const DashboardHome = () => {
  const progress = 50
  return (
    <div className="dashboardHome">
      <Spacer height={40} />
      <div className="totalCardItemsContainer">
        <TotalItemsCard
          progress={progress}
          heading="Total Orders"
          total={8000}
          inPercent={80}
        />
        <TotalItemsCard  total={8000}
          inPercent={80} heading="Total Cancel" />
        <TotalItemsCard  total={8000}
          inPercent={80} heading="Total Refund" />
        <TotalItemsCard   total={8000}
          inPercent={80} heading="Total Sale" />
      </div>
      <Spacer height={40} />
      <div className="allStatitics">
        <div className="dataStatitics">
          <div className="thisWeek">
            <ThisWeekCard heading="Sale this week" ammount={5000} />
            <ThisWeekCard heading="Earning this week" ammount={5000} />
            <ThisWeekCard heading="Your Balance " ammount={5000} />
          </div>
          <div className="today">
            <TodayInformationCard
              number={82}
              id={1}
              heading="Orders Received"
            />
            <TodayInformationCard
              number={82}
              id={2}
              heading="Today delivered"
            />
            <TodayInformationCard number={82} id={3} heading="Today Sales" />
            <TodayInformationCard number={82} id={4} heading="Today Refund" />
          </div>
        </div>

        {/* <div className="dataStatiticsChart">
          <h1>data chart</h1>
        </div> */}
      </div>
{/* 
      <div className="lastOrders">
        <h1>Last Orders</h1>
      </div>

      <div className="lastOrders">
        <h1>lastOrders</h1>
      </div> */}
    </div>
  )
}

export default DashboardHome
