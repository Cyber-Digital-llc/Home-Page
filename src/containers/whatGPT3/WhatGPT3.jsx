import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Cyber Digital" text="We are a Los Angeles based digital services company. " />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      {/* <p>Explore the Library</p> */}
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Single Page Applications" text="A web app implementation that loads only a single web document, and updates the content of the body of that single document via Javascript APIs. " />
      <Feature title="Shopify" text="We offer e-commerce store set up and modifications to website themes. " />
      <Feature title="Technology & Development" text="Our Team is dedicated and creative in order to create powerful web solutions &nbsp;    - Full Stack Web Development &nbsp; - HTML/CSS/JS&nbsp; - React &nbsp;- Backend/Frontend/API Integration - Hosting" />
    </div>
  </div>
);

export default WhatGPT3;
