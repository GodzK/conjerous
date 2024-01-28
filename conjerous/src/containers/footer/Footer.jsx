import React from 'react';
import { mongodb} from  './importfooter'
import './footer.css';

const Footer = () => (
  <div className="footer section__padding">
    <div className="footer-heading">
      <h1 className="gradient-text">เเล้วมาเรียนกับเรา</h1>
    </div>

    <div className="footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="footer-links">
      <div className="footer-links_logo">
        <img src={mongodb} alt="logo" />
      </div>
      <div className="footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Get in touch</h4>
        <p href="https://www.facebook.com/phakaphol.dherachaisuphakij/">Phakaphol Dherachaisuphakij</p>
        <p>095-946-0008</p>
        <p></p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>@2023 SARASAS PITTAYA</p>
    </div>
  </div>
);

export default Footer;