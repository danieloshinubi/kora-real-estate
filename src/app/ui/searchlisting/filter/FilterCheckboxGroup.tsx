// components/Filters/FilterCheckboxGroup.tsx

import React, { useState } from 'react';

interface FilterCheckboxGroupProps {
  title: string;
  options: string[];
  onChange: (selected: string[]) => void;
}

const FilterCheckboxGroup: React.FC<FilterCheckboxGroupProps> = ({
  title,
  options,
  onChange,
}) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleCheckboxChange = (option: string) => {
    let updated = [...selected];
    if (updated.includes(option)) {
      updated = updated.filter((o) => o !== option);
    } else {
      updated.push(option);
    }
    setSelected(updated);
    onChange(updated);
  };

  return (
    <div>
      <h3 className="font-medium mb-2">{title}</h3>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => handleCheckboxChange(option)}
              className="form-checkbox"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterCheckboxGroup;
