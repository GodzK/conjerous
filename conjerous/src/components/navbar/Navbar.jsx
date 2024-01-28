import React, { useState } from "react";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import logo from "../../assets/logo.svg";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home </a>
    </p>
    <p>
      <a href="#Mern">What is MERN</a>
    </p>
    <p>
      <a href="#possibility">Open Ai </a>
    </p>
    <p>
      <a href="#features">Case study</a>
    </p>
    <p>
      <a href="#blog">library</a>
    </p>
  </>)


function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="Navbar-nav">
      <div className="Navbar-nav-link">
        <div className="Navbar-nav-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="Navbar-link-container">
          <Menu />
        </div>
      </div>
      <div className="Navbar-navbar-sign">
        <p>sign-in</p>
        <button type="button">sign up</button>
      </div>
      {/* menu คล้ายhamburger */}
      <div className="Navbar-menu"> 
      {/* เป็นคำสั่งเงื่อนไขที่ถูกใช้เพื่อแสดงผลตามค่าของตัวแปรสถานะ toggleMenu ถ้า toggleMenu เป็นจริง จะแสดงไอคอนปิด  */}
        {toggleMenu ? (
          <RiCloseLine
            color="#f42222"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {/* เป็นคำสั่งเงื่อนไขเพื่อแสดงผลเนื้อหาที่อยู่ภายในวงเล็บถ้า toggleMenu เป็นจริง. */}
        {toggleMenu && (
          <div className="Navbar-menu-container scale-up-center">
            <div className="Navbar-menu-link-container">
              <Menu />
            </div>
            <div className="Navbar-menu-link-container-sign">
              <p>sign-in</p>
              <button type="button">sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
