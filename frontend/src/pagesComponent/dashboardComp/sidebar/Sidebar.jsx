import React, { useState } from 'react'
import './sidebar.css'
import Logo from '../../../images/swiggyLogo.PNG'
import { NavLink, useLocation } from 'react-router-dom'
import LinksData from '../../../data/LinksData'
import pageRoutes from '../../../components/routes/pageRoutes'
import { Spacer } from '../../../components'


const Links = ({ path, icon, name, onClicklink, activeClass }) => {
  return (
    <li>
      <NavLink
        to={path}
        onClick={onClicklink}
        className={({ isActive }) => (isActive ? activeClass : '')}
      >
        {icon} {` ${name}`}
      </NavLink>
    </li>
  )
}

const SidebarOptions = ({ LinksData, setactive }) => {
  const [show, setshow] = useState(false)

  const handleClick = () => {
    setshow(!show)
  }
  return (
    <>
      <li onClick={handleClick}>
        <div className={show ? 'linkIcon activeLinkIcon' : 'linkIcon'}>
          {LinksData.icon}
          <span>{LinksData.mainLink}</span>
          <i
            className={
              show
                ? 'fa-solid fa-angle-right rotate'
                : 'fa-solid fa-solid fa-angle-right'
            }
          ></i>
        </div>
      </li>

      {LinksData.subLink && show ? (
        <ul className={show ? 'subList' : 'subList'}>
          {LinksData.subLink.map((data, idx) => (
            <Links
              key={idx}
              path={data.path}
              icon={data.icon}
              name={data.name}
              activeClass="activeSidebarOption"
            />
          ))}
        </ul>
      ) : null}
    </>
  )
}

const Sidebar = () => {
  const location = useLocation()

  return (
    <div className="sidebar">
      <Spacer height={20} />
      <div className="brandName">
        <img src={Logo} alt="" srcset="" />
        <h2>Swiggy</h2>
      </div>
      <Spacer height={20} />
      <div className="sidebarLink">
        <ul>
          <li>
            <Links
              path={pageRoutes.adminPanel}
              icon={<i class="fa-solid fa-table-cells-large"></i>}
              name="Dashboard"
              activeClass={
                location.pathname === '/dashboard' ? 'activeSidebarOption' : ''
              }
            />
          </li>
          {LinksData.map((data, idx) => (
            <SidebarOptions key={idx} LinksData={data} id={idx} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
