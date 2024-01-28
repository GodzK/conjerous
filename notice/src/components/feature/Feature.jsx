import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => (
  <div className="container-feature">
    <div className="container-feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="container-feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;