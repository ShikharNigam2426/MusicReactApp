import React from 'react'

const PlayBackButtons = () => {
  return (
    <div className='d-flex flex-row mx-2'>
        <button className='btn btn-primary align-items-center d-flex justify-content-center mx-2' style={{width:'42px',height:'42px',borderRadius:'50px'}}><i className="fa-solid fa-backward-step"></i></button>
        <button className='btn btn-primary align-items-center d-flex justify-content-center mx-2' style={{width:'42px',height:'42px',borderRadius:'50px'}}><i className="fa-solid fa-play"></i></button>
        <button className='btn btn-primary align-items-center d-flex justify-content-center mx-2' style={{width:'42px',height:'42px',borderRadius:'50px'}}><i className="fa-solid fa-forward-step"></i></button>
    </div>
  )
}

export default PlayBackButtons