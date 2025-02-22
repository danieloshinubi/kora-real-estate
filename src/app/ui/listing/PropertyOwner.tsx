import Image from "next/image";
import { cabin } from "../fonts";

export default function PropertyOwner() {
  return (
    <section className="max-w-5xl mx-auto mt-16 px-4 mb-64 ">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        {/* Left Section */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          {/* Heading */}
          <h2 className="text-[#8B3A2D] text-xl font-semibold mb-4">
            Property Owner
          </h2>

          {/* Owner Info */}
          <div className="flex flex-col w-[253px] items-center space-x-4">
            {/* Profile Image */}
            <div className="w-[163px] h-[163px] rounded-full relative">
              <Image
                src="/owner.jpg"
                alt="Owner"
                fill
                className="object-cover rounded-full"
              />
            </div>

            {/* Name & Rating */}
            <div className="mt-8">
              <h3 className="text-xl font-bold">Oshinubi Akinola</h3>
              <p className="text-sm text-gray-600">⭐ 4.8 Star Rating</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-2/3 md:max-w-[600px]">
          {/* About */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-[#8B3A2D]">About</h4>
            <p className={`${cabin.className} text-sm text-gray-600 mt-2 leading-relaxed`}>
              Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse
              semper nunc blandit ac at luctus. Vivam diam in sit ultrices in
              proin lorem ipsum. Feugiat etiam scelerisque aliquet vitae mauris
              ornare quis eget tincidunt. Sapien aliquet aliquet eu conubiar.
              Aliquet leo arcu tellus. Lorem ipsum dolor sit amet consectetur.
              Tempus semper suspendisse.
            </p>
          </div>

          {/* Contact Me */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-[#8B3A2D]">Contact Me</h4>
            <ul className={`${cabin.className} flex flex-col space-y-4 mt-2 text-sm text-gray-700`}>
              <li>facebook</li>
              <li>google</li>
            </ul>
          </div>

          {/* Message Me Button */}
          <button className={`${cabin.className} bg-[#D2691E] text-white px-4 py-2 rounded-md text-sm`}>
            Message Me
          </button>
        </div>
      </div>
    </section>
  );
}
