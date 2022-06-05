import React from 'react'
import { shopify, reactLogo } from './imports'
import './brand.css'

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={reactLogo} alt="react-logo" />
    </div>
    <div>
      <img src={shopify} alt="shopify-logo" />
    </div>
  </div>
)

export default Brand
