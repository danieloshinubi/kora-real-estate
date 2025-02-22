// components/Filters/FilterPanel.tsx

import React from 'react';
import FilterCheckboxGroup from './FilterCheckboxGroup';
import FilterRating from './FilterRating';

const FilterPanel: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Filters</h2>

      {/* Example: Filter by number of Bedrooms */}
      <FilterCheckboxGroup
        title="Bedrooms"
        options={['1', '2', '3', '4+']}
        onChange={(selected) => console.log('Selected Bedrooms:', selected)}
      />

      {/* Example: Filter by Amenities */}
      <FilterCheckboxGroup
        title="Amenities"
        options={['WiFi', 'Parking Space', 'Gym', 'Pool']}
        onChange={(selected) => console.log('Selected Amenities:', selected)}
      />

      {/* Example: Filter by Rating */}
      <FilterRating
        onChange={(rating) => console.log('Selected rating:', rating)}
      />
    </div>
  );
};

export default FilterPanel;
