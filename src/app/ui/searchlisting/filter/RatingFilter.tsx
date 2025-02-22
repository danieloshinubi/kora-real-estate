import { FaStar, FaRegStar } from "react-icons/fa"; // FontAwesome Icons for stars

type RatingsFilterProps = {
  selectedRating: number | null;
  setSelectedRating: (rating: number) => void;
};
const RatingsFilter: React.FC<RatingsFilterProps> = ({ selectedRating, setSelectedRating }) => {
  return (
    <div className='space-y-3'>
      {/* Title */}
      <h3 className='font-semibold text-lg'>Ratings</h3>

      {/* Rating List */}
      <div className='flex flex-col space-y-2'>
        {[5, 4, 3, 2, 1].map((rating) => (
          <label
            key={rating}
            className='flex items-center space-x-3 cursor-pointer'
          >
            {/* Checkbox */}
            <input
              type='radio'
              name='rating'
              className='hidden'
              checked={selectedRating === rating}
              onChange={() => setSelectedRating(rating)}
            />
            <div
              className={`w-5 h-5 flex items-center justify-center rounded ${
                selectedRating === rating
                  ? "bg-orange-600"
                  : "border border-gray-400"
              }`}
            >
              {selectedRating === rating && (
                <span className='text-white font-bold'>&#10003;</span>
              )}
            </div>

            {/* Stars */}
            <span className='flex text-orange-500'>
              {Array.from({ length: 5 }).map((_, index) =>
                index < rating ? (
                  <FaStar key={index} className='text-orange-500' />
                ) : (
                  <FaRegStar key={index} className='text-gray-300' />
                )
              )}
            </span>

            {/* Rating Number */}
            <span className='text-gray-700 font-medium'>{rating}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RatingsFilter;
