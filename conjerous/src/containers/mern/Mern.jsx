import React from 'react'
import './mern.css'
import { Feature } from '../../components'
function Mern() {
  return (
    <div className="mern section__margin" id = "MERN">
      <div className="mern-feature">
        <Feature/>
      </div>
      <div className="mern-heading">
        <h1 className="gradient-text">MERN THE NEXT STEP OF PROGRAMMING</h1>
        <p>Explore the library</p>
      </div>
      <div className="mern-container">
        <Feature/>
        <Feature/>
        <Feature/>
        <Feature/>
      </div>
    </div>
  )
}

export default Mern