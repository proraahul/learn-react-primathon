import React, { useState } from 'react';

const Rating = ({ maxStars, initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    onRatingChange(selectedRating);
  };

  return (
    <div>
      {[...Array(maxStars).keys()].map((index) => (
        <Star
          key={index}
          selected={index < rating}
          onClick={() => handleStarClick(index + 1)}
        />
      ))}
    </div>
  );
};

const Star = ({ selected, onClick }) => (
  <span style={{ cursor: 'pointer' }} onClick={onClick}>
    {selected ? '★' : '☆'}
  </span>
);

export default Rating;
