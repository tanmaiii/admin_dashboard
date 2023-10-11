import React from 'react'
import './overallList.scss'

import {data} from '../../constants'

const icons = [
    <i className='bx bx-receipt'></i>,
    <i className='bx bx-user'></i>,
    <i className='bx bx-cube'></i>,
    <i className='bx bx-dollar'></i>
]

export default function OverallList() {
  return (
    <div className='overall-list'>
        {
            data.overall.map((item, i) => (
                <li className='overall-list__item' key={i}>
                    <div className='overall-list__item__icon'>
                        {icons[i]}
                    </div>
                    <div className="overall-list__item__info">
                        <div className='title'>
                            {item.value}
                        </div>
                        <span>{item.title}</span>
                    </div>
                </li>
            ))
        }
    </div>
  )
}
