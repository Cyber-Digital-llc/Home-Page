import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Front End Development',
    text: 'Custom Front End Development of graphical user interface using HTML, CSS, JS, ReactJS.',
  },
  {
    title: 'Back End Development',
    text: 'Server side back end solutions using Node.js, PostGreSQL + integration of APIs. Databases, scripting, and website architecture.',
  },
  {
    title: 'Shopify Store Development',
    text: 'Shopify Development, testing and deployment, data migration, theme set up and modifications.',
  },
  {
    title: 'Conversion Rate Optimization',
    text: 'Increase the percentage of conversions from a website or app. Generate ideas for elements on your site that can be improved and then validated via A/B testing.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Send Us An Email and Let Us Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
