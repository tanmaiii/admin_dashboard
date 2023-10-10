import React from 'react'
import './topNav.scss'
import avt from '../../assets/images/avt.jpg'

export default function TopNav({user}) {
  return (
    <div className='topnav'>
      <div className="topnav__userInfo">
          <div className='topnav__userInfo-img'>
            <img src={avt} alt="" />
          </div>
          <div className='topnav__userInfo-name'>
            <span>Tan Mai</span>
          </div>
      </div>
      <div className='sidebar-toggle'>
         <i className='bx bx-menu-alt-right'></i>
      </div>
    </div>
  )
}
