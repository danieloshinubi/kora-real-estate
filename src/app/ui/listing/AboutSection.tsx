import { cabin, inknutAntiqua } from "../fonts";

export default function AboutSection() {
  return (
    <div className={`${cabin.className} flex flex-col gap-6 py-6 md:py-12`}>
      {/* Header */}
      <div className="flex justify-between items-start">
        <h2 className={`${inknutAntiqua.className} text-[24px] font-semibold text-[#8B3A2D]`}>About this location</h2>
        <span className="bg-gray-700 text-white text-sm px-3 py-1 rounded-full">
          Pent House
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 mt-2">
        Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc 
        blandit at ac luctus. Viverra diam in sit ultrices in et proin lorem ipsum. Feugiat 
        etiam scelerisque aliquet vitae mauris ornare quis eget tincidunt. Sapien aliquet 
        aliquet ut curabitur. Aliquet leo arcu tellus. Lorem ipsum dolor sit amet consectetur. 
        Tempus semper suspendisse.
      </p>

      {/* Show More Button */}
      <button className="text-gray-600 mt-3 flex items-center">
        <span className="underline">Show more</span> <span className="ml-1">&gt;</span>
      </button>
    </div>
  );
}
