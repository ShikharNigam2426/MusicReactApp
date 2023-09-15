import React from 'react'
import './style.css'

const valuee = 0;

const ProgrssBar = () => {
  return (
    <div>
        <input className='progressBar' type="range" value={valuee} min={0} max={100}/>
    </div>
  )
}

export default ProgrssBar