// src/components/PricingHeader.jsx
import React from 'react';
import './PricingHeader.css';

const PricingHeader = () => {
  return (
    <div className="pricing-header">
      <div>
        <h1><b>HIGH ROLLER AGENCY</b></h1>
        
        <p>Once we have published the article for you, any further edits may include an extra charge.</p>

        <p>High Roller Agency will use reasonable good faith efforts to ensure that such article will remain publicly available in the applicable publication for at least 12 months.</p>
      </div>
      <div className="buttons">
        <button>Video Tutorial</button>
        <button>How To</button>
        <button onClick={() => window.location.href='https://docs.google.com/document/d/1sR85jBOenAGDX0kzkt730Cz5DmX6BNNMOJgwzNCRRew/edit'}>Download PR Questionnaire</button>
        <button onClick={() => window.location.href='https://docs.google.com/document/d/15szAsIWNqBXyWgI-5tXDaXAgD89_GIghzB20xh-ML70/edit'}>Download TV Questionnaire</button>
      </div>
    </div>
  );
}

export default PricingHeader;
