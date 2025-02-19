import { cabin } from "../fonts";

export default function Header() {
    return (
      <div className="">
        <h1 className="text-3xl text-[#8B3A2D] font-semibold">
          Relaxing retreat at the heart of Yuba City.
        </h1>
        <p className="text-yellow-500 mt-2">⭐⭐⭐⭐⭐<span className={`${cabin.className} text-black`}> 5 star</span></p>
      </div>
    );
  }
  