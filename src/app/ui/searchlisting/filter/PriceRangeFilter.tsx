import { Range } from "react-range";
import { cabin, inknutAntiqua } from "../../fonts";

type PriceRangeFilterProps = {
  priceRange: [number, number]; // Ensure it is a tuple
  setPriceRange: (newPriceRange: [number, number]) => void;
};

const PriceRangeFilter: React.FC<PriceRangeFilterProps> = ({
  priceRange,
  setPriceRange,
}) => {
  return (
    <div className={`${cabin.className} space-y-4 pb-8 border-b`}>
      <span
        className={`${inknutAntiqua.className} text-sm font-medium text-gray-700`}
      >
        Price
      </span>

      {/* Dual-Thumb Range Slider */}
      <div className="relative w-full h-6">
        <Range
          step={10000}
          min={0}
          max={1000000}
          values={priceRange}
          onChange={(newPriceRange) =>
            setPriceRange(newPriceRange as [number, number])
          }
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="w-full h-[1px] bg-[#2F4F4F] rounded-md relative"
              style={{ ...props.style }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              key={props.key}
              className="w-6 h-6 bg-[#2F4F4F] border-2 border-primary rounded-full shadow-md focus:outline-none"
              style={{ ...props.style }}
            />
          )}
        />
      </div>

      {/* Min & Max Input Fields */}
      <div className="flex items-center gap-3">
        <div className="p-2 border rounded-md w-[100px]">
          <span className="font-bold">Min</span>
          <input
            type="number"
            className="input outline-0 input-sm w-full "
            min="0"
            max="1000000"
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([Number(e.target.value), priceRange[1]])
            }
          />
        </div>
        <div className="p-2 border rounded-md w-[100px]">
          <span className="font-bold">Min</span>
          <input
            type="number"
            className="input outline-0 input-sm w-full text-center"
            min="0"
            max="1000000"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
