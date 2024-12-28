import React, { useState, useEffect } from 'react';

const StarRating = ({ totalStars = 5, rrating = 0, sendRate }) => {
  const [rating, setRating] = useState(rrating);

  useEffect(() => {
    setRating(rrating);
  }, [rrating]);

  const handleRatingChange = (index) => {
    setRating(index);
    sendRate(index);
  };

  return (
    <div className='flex'>
      {Array.from({ length: totalStars }, (_, index) => (
        <label key={index}>
          <input
            type="checkbox"
            value={index + 1}
            checked={index + 1 <= rating}
            onChange={() => handleRatingChange(index + 1)}
            className="hidden"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={index + 1 <= rating ? "gold" : "gray"}
            viewBox="0 0 24 24"
            className="w-8 h-8 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        </label>
      ))}
    </div>
  );
};

export default StarRating;
