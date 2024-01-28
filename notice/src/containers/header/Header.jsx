import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
function Header() {
  return (
    <div className="Header section-padding" id="home">
      <div className="Header-content">
        <h1 className="gradient-text">Lets Make Something different</h1>
        <h1 className="gradient-text">Taught by PKCodeExplainer</h1>
        <div className="Header-content-input">
          <input type="email" placeholder="your email adress" />
          <button type="button">📧</button>
        </div>
        <div className="Header-content-people">
          <img src={people} alt="" />
          <p>519 friends in facebook</p>
        </div>
       
      </div> 
      <div className="Header-image">
          <img src={ai} alt="ai" />
        </div>
    </div>
  );
}

export default Header;
