import React from 'react'
import cyberDigitalLogoWhite from '../../assets/cyberDigitalLogoWhite.png'
import './footer.css'

const Footer = () => (
  <div className="gpt3__footer section__padding" id="contact">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">
        Do you want to step in to the future before others
      </h1>
    </div>

    <div className="gpt3__footer-btn">
      <a href="mailto:cyberdigitalllc@gmail.com">
        <p>Let us Chat</p>
      </a>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={cyberDigitalLogoWhite} alt="gpt3_logo" />
        <p>
          Los Angeles, CA, <br /> All Rights Reserved
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <a href="mailto:cyberdigitalllc@gmail.com">
          <p>Contact</p>
        </a>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <a href="mailto:cyberdigitalllc@gmail.com">
          <p>Contact</p>
        </a>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Los Angeles, CA</p>
        <p>626.786.7473</p>
        <a href="mailto:cyberdigitalllc@gmail.com">
          <p>cyberdigitalllc@gmail.com</p>
        </a>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 Cyber Digital, llc. All rights reserved.</p>
    </div>
  </div>
)

export default Footer
