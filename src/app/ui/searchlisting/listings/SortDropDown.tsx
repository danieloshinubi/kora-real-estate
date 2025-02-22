// components/Listings/SortDropdown.tsx

import React, { useState } from 'react';

interface SortDropdownProps {
  onSortChange: (sortOption: string) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ onSortChange }) => {
  const [selected, setSelected] = useState('recommended');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
    onSortChange(e.target.value);
  };

  return (
    <select
      className="border text-[12px] border-[#8B3A2D] rounded-2xl mr-8"
      value={selected}
      onChange={handleChange}
    >
      <option value="recommended">Recommended</option>
      <option value="lowest-price">Lowest Price</option>
      <option value="highest-price">Highest Price</option>
      {/* add more sort options as needed */}
    </select>
  );
};

export default SortDropdown;
