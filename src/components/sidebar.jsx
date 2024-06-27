import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import React, {useState} from 'react'
import * as HiIcons from "react-icons/hi";
import './styles/sidebar.css'


function DashboardSideBar() {
  // TODO handle close sidebar
  return (
    <nav className='sidebar'>
      <ul className="nav-menu-items">
        <li>
          <div className="sidebar-header">
            <p>smart connect</p>
          </div>
        </li>
        
        <li className="nav-item">
          <Link to='dashboard'>
            <FaIcons.FaHome className='sidebar-item-icon'/>
            <span>داشبورد</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to='template'>
            <HiIcons.HiTemplate  className='sidebar-item-icon'/>
            <span>قالب ها</span>

          </Link>
        </li>
        <li className="nav-item">
          <Link  to='device'>
            <HiIcons.HiDeviceMobile  className='sidebar-item-icon'/>
            <span>دستگاه ها</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default DashboardSideBar