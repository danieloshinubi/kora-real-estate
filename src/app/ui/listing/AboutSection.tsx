import { cabin, inknutAntiqua } from "../fonts";

type AboutSectionProps = {
  description: string;
  propertyType: {
    _id: string;
    name: string;
  };
}

export default function AboutSection({description, propertyType}: AboutSectionProps) {
  return (
    <div className={`${cabin.className} flex flex-col gap-4 md:gap-6 py-6 pt-0 md:py-12`} id="Location">
      {/* Header */}
      <div className="sm:flex justify-between items-start">
        <h2 className={`${inknutAntiqua.className}  text-[20px] md:text-[24px] mb-4 font-semibold text-[#8B3A2D]`}>About this location</h2>
        <span className="bg-gray-700 text-white text-sm px-3 py-1 rounded-full">
          {propertyType.name}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 mt-2 text-[14px]">
        {description}
      </p>

      {/* Show More Button */}
      <button className="text-gray-600 mt-3 flex items-center">
        <span className="underline">Show more</span> <span className="ml-1">&gt;</span>
      </button>
    </div>
  );
}
