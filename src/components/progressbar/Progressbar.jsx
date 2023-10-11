import React, { useEffect, useRef } from 'react'
import './progressbar.scss'

export default function Progressbar({value}) {
    const barInnerRef = useRef()
    useEffect(() => {
        barInnerRef.current.style.width = `${value}%`
    },[])
    return (
    <div className='progress-bar'>
        <div ref={barInnerRef} className='progress-bar__inner'></div>
    </div>
  )
}
