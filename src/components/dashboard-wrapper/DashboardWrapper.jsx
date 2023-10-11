import React from 'react'
import './dashboard-wrapper.scss'

const DashboardWrapper= props => {
  return (
    <div className='dashboard-wrapper row'>
        {props.children}
    </div>
  )
}

export default DashboardWrapper;

export const DashboardWrapperMain = props => {
    return (
        <div className="dashboard-wrapper__main">
            {props.children}
        </div>
    )
}

export const DashboardWrapperRight = props => {
    return (
        <div className="dashboard-wrapper__right">
            {props.children}
        </div>
    )
}