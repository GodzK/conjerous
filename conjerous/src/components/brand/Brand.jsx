import React from 'react'
import './brand.css'
import { mongodb,express, react, node} from  './import'

function Brand() {
  return (
    <div className="brand section-padding">
      
      <div>
        <img src={mongodb} alt="mongodb" />
      </div>
      <div>
        <img src={express} alt="express" />
      </div>
      <div>
        <img src={react} alt="react" />
      </div>
      <div>
        <img src={node} alt="react" />
      </div>
    </div>
  )
}

export default Brand