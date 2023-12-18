import React from 'react'
import "./CardDataUI.css"


const cardUiData=[{
  id:1,
  name:"Sprint Forecast",
  value:4
},{
  id:2,
  name:"SP Completed",
  value:360
},{
  id:3,
  name:"Overall Progress",
  value:"95% ^"
},
]

const CardDataUI = () => {
  return (
    <div className='card-data-ui-container'>
        <div className='row card_items '>
          
          {cardUiData.map((item)=><div key={item.id} className='col-2 card_container'>
            <h5 className='item_name'>{item.name}</h5>
            <h1 className='item_value'>{item.value}</h1>
            
          </div>)}
        </div>
    </div>
  )
}

export default CardDataUI