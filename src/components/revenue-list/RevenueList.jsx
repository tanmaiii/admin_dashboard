import React from 'react'
import './revenue-list.scss'

import {data} from '../../constants'
import Progressbar from '../progressbar/Progressbar'


export default function RevenueList() {
  return (
    <div className='revenue-list'>
        {
            data.revenueByChannel.map((item, i) => (
                <li key={i} className='revenuelist__item'>
                    <div className='revenue-list__item__title'>
                        {item.title}
                        <span className={`${item.value < 50 ? 'txt-success' : 'txt-danger'}`}>
                            {item.value}%
                        </span>
                    </div>
                    <div>
                            <Progressbar value={item.value} />
                    </div>
                </li>
            ))
        }
    </div>
  )
}
