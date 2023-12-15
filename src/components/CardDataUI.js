import React from 'react'
import "./CardDataUI.css"

const CardDataUI = () => {
  return (
    <div className='card-data-ui-container'>
        <div className='row'>
          <div className='col-2'>
            <h5>Sprint Forecast</h5>
            <h3>4</h3>
            <p>add some text here</p>
          </div>
          <div className='col-2'>
          <h5>SP Completed</h5>
            <h3>360</h3>
          </div>
          <div className='col-2'>
          <h5>Overall Progress</h5>
            <h3>95%</h3>
            <span></span>
          </div>
        </div>
    </div>
  )
}

export default CardDataUI