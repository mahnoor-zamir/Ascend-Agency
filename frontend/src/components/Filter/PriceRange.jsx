import React from 'react';
import * as Slider from '@radix-ui/react-slider';

const PriceRangeFilter = ({ minPrice, maxPrice, onChange }) => {
  const [range, setRange] = React.useState([minPrice, maxPrice]);

  const handleChange = (newValues) => {
    setRange(newValues);
    onChange(newValues);
  };

 
  return (
    <div className="space-y-4">
      <label className="filter-label">Price range</label>
      <div className="flex justify-between">
       
      </div>
      <Slider.Root
        className="relative flex items-center h-5 select-none touch-none"
        value={range}
        onValueChange={handleChange}
        min={minPrice}
        max={maxPrice}
        step={1}
        aria-label="Price range"
      >
        <Slider.Track className="relative h-1 bg-white rounded-full grow">
          <Slider.Range className="absolute h-full rounded-full" style={{ backgroundColor: 'rgba(0, 200, 2, 0.7)' }} 
           />
        </Slider.Track>
        <Slider.Thumb
          className="block w-5 h-5 bg-green-500 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          aria-label="Minimum"
          
        />
        <Slider.Thumb
          className="block w-5 h-5 bg-green-500 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          aria-label="Maximum"
        />
      </Slider.Root>
<div className="flex justify-between text-white">
        <span className="text-sm">${range[0].toLocaleString()}</span>
        <span className="text-sm">${range[1].toLocaleString()}</span>
      </div>
    </div>
  );
};

export default PriceRangeFilter;