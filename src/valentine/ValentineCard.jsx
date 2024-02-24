import React, { useState } from 'react';
import './ValentineCard.css';

const ValentineCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`valentine-card ${isOpen ? 'open' : ''}`} onClick={handleClick}>
      <div className="front">
        <h2>Happy Valentine's Day!</h2>
      </div>
      <div className="back">
        <p>Dear Love,</p>
        <p>You mean everything to me. Wishing you a day filled with love, joy, and happiness.</p>
        <p>With all my heart,</p>
        <p>Your Name</p>
      </div>
    </div>
  );
};

export default ValentineCard;
