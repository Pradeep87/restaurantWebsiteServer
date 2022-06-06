import React,{useEffect,useState} from 'react'
import './dashboard.css'
import Sidebar from '../../pagesComponent/dashboardComp/sidebar/Sidebar'
import { Outlet, Link } from 'react-router-dom'
import logo from '../../images/swiggyLogo.PNG'
import DashboardHome from './dashboardHome/DashboardHome'
import { useLocation } from 'react-router-dom'
import { OPEN_DESHBOARD_PAGE } from '../../redux/constants/Constants'
import { useDispatch } from 'react-redux'

const Dashboard = () => {
  const location = useLocation()
  const dispatch=useDispatch()
  const [path, setpath] = useState('')

  useEffect(() => {
  const pathName=location.pathname.split('/')
setpath(pathName[1])
    if(path==='dashboard'){
   dispatch({type:OPEN_DESHBOARD_PAGE,
    payload:true
  })}
  }, [dispatch,path,location.pathname])
  
  return (   
    <>
      <div className="dashboard">
        <Sidebar />
        <div className="pageSection">
          <div className="dashboardNavbar">
            <h2>Dashboard</h2>
            <div className="dshboardUser">
              <img src={logo} alt="" />
              <span>User</span>
              <Link to="/">go back</Link>
            </div>
          </div>
          {location.pathname === '/dashboard' ? <DashboardHome /> : <Outlet />}
        </div>
      </div>
    </>
  )
}
export default Dashboard

// https://demo.bastisapp.com/backoffice/merchant/dashboard
