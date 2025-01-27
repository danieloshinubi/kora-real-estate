import React from "react";
import Image from "next/image";
import { MdArrowDropDown } from "react-icons/md";
import MobileNav from "./components/MobileNav";
import { usePathname } from "next/navigation";

const NavLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Feed",
    url: "/feed",
  },
  {
    name: "Favourites",
    url: "/favourites",
  },
];
const Navbar: React.FC = () => {
  const pathName = usePathname();
  return (
    <nav className='absolute top-0 left-0 z-20 w-full flex items-center  px-6 lg:px-24 py-4 bg-transparent'>
      <div className='container mx-auto w-full flex  items-center justify-between'>
        {/* Left Section: Logo */}
        <div className='flex items-center'>
          <Image
            src='/logo-kora.png'
            width={103}
            height={30}
            alt='KORA Logo'
            className='h-8 mr-2'
          />
        </div>

        {/* Middle Section: Navigation Links */}
        <div className='hidden lg:flex space-x-6 mx-auto'>
          {NavLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className={`${link.url === pathName ? "text-white" : "text-[#D2691E]"} hover:text-white`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Section: Buttons and Avatar */}
        <div className='flex items-center gap-4 lg:gap-8 justify-between ml-auto mr-4'>
          <button className='hidden lg:block px-4 py-2 border-2 border-[#F5DEB3] text-[#F5DEB3] rounded-full hover:bg-[#F5DEB3] hover:text-white'>
            Become a host
          </button>
          <div className='relative flex gap-2 items-center'>
            <button className=' bg-orange-500 p-1 rounded-full'>
              <MdArrowDropDown className='text-gray-300' />
            </button>
            <Image
              src='/avatar.png'
              alt='User Avatar'
              width={46}
              height={46}
              className='h-10 w-10 rounded-full border-2'
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav />
    </nav>
  );
};

export default Navbar;
