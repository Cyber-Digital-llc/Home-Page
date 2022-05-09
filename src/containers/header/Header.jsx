import React from 'react';
// import people from '../../assets/people.png';
// import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
        We Offer Custom Web Application Development{' '}
      </h1>
      <p>Let&apos;s build something amazing together! </p>
      <p>
        Let Cyber Digital, llc design your website using a platform
        or build one from the bottom up.
      </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" aria-label="label" />
        <button type="button">Get Started</button>
      </div>

      {/* <div className="gpt3__header-content__people">
        <img src={people} alt="peopleImg" />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
    </div>
    {/*
    <div className="gpt3__header-image">
      {/* <img src={ai} alt="headerImg"/> */}
    {/* </div> */}
  </div>
);

export default Header;
