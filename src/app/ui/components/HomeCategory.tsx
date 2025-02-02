import Image from "next/image";

type HomeCategoryProps = {
  title: string;
  imageUrl: string;
};

const HomeCategory: React.FC<HomeCategoryProps> = ({ title, imageUrl }) => {
  return (
    <div className="relative w-full max-w-[212px] h-64 rounded-lg mx-auto overflow-hidden shadow-md group">
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition duration-300" />
      {/* Title */}
      <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
        {title}
      </div>
    </div>
  );
};

export default HomeCategory;
