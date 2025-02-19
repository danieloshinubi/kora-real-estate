import Image from "next/image";

export default function ImageGallery() {
  return (
    <div className="grid grid-cols-2 gap-2 mt-4 w-full rounded-lg">
      {/* Large Image */}
      <div className="relative col-span-1 h-full">
        <Image
          src="/lodge.jpg"
          alt="Main"
          fill
          className="w-full h-full object-cover rounded-l-lg "
        />
      </div>

      {/* Right Section with Four Images */}
      <div className="grid grid-cols-2 gap-2 col-span-1">
        <div className="relative h-[177px]">
          <Image
            src="/lodge.jpg"
            alt="Gallery"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-[177px]">
          <Image
            src="/lodge.jpg"
            alt="Gallery"
            fill
            className="w-full h-full object-cover rounded-tr-lg"
          />
        </div>
        <div className="relative h-[177px]">
          <Image
            src="/lodge.jpg"
            alt="Gallery"
            fill
            className="w-full h-full object-cover"
          />
        </div>

        {/* Last Image with Overlayed "Show More" Button */}
        <div className="relative h-[177px]">
          <Image
            src="/lodge.jpg"
            alt="Gallery"
            fill
            className="w-full h-full object-cover rounded-br-lg"
          />
        </div>
      </div>
    </div>
  );
}
