import React, { useState } from 'react';
import './styles/Tabs.css';

const Tabs = () => {
  // Experience Data (Just Titles, No Content)
  const tabs = [
    { title: 'Artosci (Netherlands)' },
  ];

  return (
    <div className="accordions d-flex mt-3">
      {tabs.map((tab, index) => (
        <div key={index} className="accordion-items">
          {/* Title Section (No click event, no content toggle) */}
          <h3 className='bgactive'>
            <span className='rotation w-100'>{tab.title}</span>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
