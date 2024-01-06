import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => (
  <div className="feature">
    <div className="feature-title">
      <div />
      {/* ข้างบนคือที่ขีด */}
      <h1>{title}</h1>
    </div>
    <div className="feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;