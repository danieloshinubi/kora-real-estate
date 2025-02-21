import { FaStar } from "react-icons/fa6";
import { cabin } from "../fonts";

export default function Header() {
  return (
    <div className=''>
      <h1 className='text-3xl text-[#8B3A2D] font-semibold'>
        Relaxing retreat at the heart of Yuba City.
      </h1>
      <p className='text-yellow-500 mt-2 flex'>
        <div className='flex items-center'>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        <span className={`${cabin.className} text-black`}> 5 star</span>
      </p>
    </div>
  );
}
