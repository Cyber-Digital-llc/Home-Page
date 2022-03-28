import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      {/* <img src={possibilityImage} alt="possibility" /> */}
    </div>
    <div className="gpt3__possibility-content">
      <h4>Let Your Online Presence Be Known</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>In order to remain competitive in today`s cyber world, one must stay up do date with the current technologies.</p>
      <h4>Email Us to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
