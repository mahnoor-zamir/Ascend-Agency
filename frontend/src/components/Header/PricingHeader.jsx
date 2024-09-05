// src/components/PricingHeader.jsx
import React from 'react';
import './PricingHeader.css';

const PricingHeader = () => {
  return (
    <div className="pricing-header">
      <div>
        <h1><b>PRICING (ASCEND)</b></h1>
        
        <p>Once we have published the article for you, any further edits may include an extra charge.</p>

<p>Ascend Agency will use reasonable good faith efforts to ensure that such article will remain publicly available in the applicable publication for at least 12 months.</p>
      </div>
      <div className="buttons">
        <button>Video Tutorial</button>
        <button>How To</button>
        <button>Download PR Questionnaire</button>
        <button>Download TV Questionnaire</button>
      </div>
    </div>
  );
}

export default PricingHeader;
