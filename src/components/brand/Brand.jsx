import React from 'react';
import { shopify, cssWhiteLogo, html5whiteLogo, nodeJslogo, reactLogo } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={cssWhiteLogo} />
    </div>
    <div>
      <img src={html5whiteLogo} />
    </div>
    <div>
      <img src={nodeJslogo} />
    </div>
    <div>
      <img src={reactLogo} />
    </div>
    <div>
      <img src={shopify} />
    </div>
  </div>
);

export default Brand;
