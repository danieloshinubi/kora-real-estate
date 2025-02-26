import { FaStar } from "react-icons/fa6";
import { cabin } from "../fonts";

type HeaderProps = {
  title: string;
  rating: number;
};
export default function Header({ title, rating }: HeaderProps) {
  const roundedRating = Math.ceil(rating); // Round up the rating

  return (
    <div className=''>
      <h1 className='text-[20px] md:text-3xl text-[#8B3A2D] font-semibold'>
        {title}
      </h1>
      <p className='text-yellow-500 mt-2 flex'>
        <div className='flex items-center'>
          {[...Array(roundedRating)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        <span className={`${cabin.className} text-black`}>
          {" "}
          {roundedRating} star
        </span>
      </p>
    </div>
  );
}
