import React, { useState } from 'react'
import './navbar.css'
import Logo from '../../images/swiggyLogo.PNG'
import { NavLink } from 'react-router-dom'
import pageRoutes from '../routes/pageRoutes'
import { useSelector } from 'react-redux'

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
const LinksData = [
  {
    path: pageRoutes.home,
    icon: <i className="fa-solid fa-house"></i>,
    name: 'Home',
  },
  {
    path: pageRoutes.search,
    icon: <i className="fa-solid fa-magnifying-glass"></i>,
    name: 'Search',
  },
  {
    path: pageRoutes.offers,
    icon: <i className="fa-regular fa-life-ring"></i>,
    name: 'Offers',
  },
  {
    path: pageRoutes.help,
    icon: <i className="fa-regular fa-circle-question"></i>,
    name: 'Help',
  },
]

const Navbar = () => {
  const [active, setactive] = useState('')
  const { user, cartItems } = useSelector((state) => state.appReducer)
  const setActiveLink = (idx) => {
    setactive(idx)
  }
  return (
    <>
      <nav>
        <div>
          <img src={Logo} alt="#" />
          <span>Race Course</span>
          <p>Dehradun,Uttarakhand 24800</p>
        </div>
        <ul>
          {LinksData.map((data, idx) => (
            <Links
              key={idx}
              path={data.path}
              icon={data.icon}
              name={data.name}
              activeClass="activeLink"
            />
          ))}

          {cartItems && cartItems.length !== 0 ? (
            <li>
              <NavLink
                to={pageRoutes.cart}
                className={'activeLink cartNotify '}
              >
                <p className="notifyIcon">{cartItems.length}</p>
                Cart
              </NavLink>
            </li>
          ) : (
            <Links
              path={pageRoutes.cart}
              icon={<i className="fa-solid fa-cart-shopping"></i>}
              name="Cart"
              activeClass="activeLink"
            />
          )}

          {user ? (
            <li>
              <NavLink
                to={'/user'}
                onClick={() => setActiveLink(5)}
                className={5 === active ? 'activeLink' : ''}
              >
                <i className="fa-regular fa-user"></i>
                {user.fullName}
              </NavLink>
            </li>
          ) : (
            <Links
              path={pageRoutes.signIn}
              icon={<i className="fa-regular fa-user"></i>}
              name={'SignIn'}
              activeClass="activeLink"
            />
          )}
          <Links
            path={pageRoutes.adminPanel}
            icon={<i className="fa-regular fa-user"></i>}
            name={'Dashboard'}
            activeClass="activeLink"
          />
        </ul>
      </nav>
    </>
  )
}

export default Navbar
