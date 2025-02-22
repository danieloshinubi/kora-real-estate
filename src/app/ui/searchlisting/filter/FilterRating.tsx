// components/Filters/FilterRating.tsx

import React, { useState } from 'react';

interface FilterRatingProps {
  onChange: (rating: number) => void;
}

const FilterRating: React.FC<FilterRatingProps> = ({ onChange }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value: number) => {
    setRating(value);
    onChange(value);
  };

  return (
    <div>
      <h3 className="font-medium mb-2">Minimum Rating</h3>
      <div className="flex items-center space-x-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleRatingChange(star)}
            className={`${
              star <= rating ? 'text-yellow-500' : 'text-gray-400'
            } focus:outline-none`}
          >
            ★
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterRating;
