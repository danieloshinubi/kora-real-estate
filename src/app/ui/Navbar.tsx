import React, { useState } from "react";
import Image from "next/image";
import { MdArrowDropDown } from "react-icons/md";
import MobileNav from "./components/MobileNav";
import { usePathname } from "next/navigation";
import { cabin } from "./fonts";
import { useLogoutMutation } from "../utils/services/api";

const NavLinks = [
  { name: "Home", url: "/" },
  { name: "Feed", url: "/map" },
  { name: "Favourites", url: "/favourites" },
];

type User = {
  id: string;
  email: string;
  phoneNo: string;
  roles: {
    User: string;
  };
  isVerified: boolean;
  accountDisabled: boolean;
};

type NavProps = {
  user: User | null;
  theme?: "light" | "dark";
  setShowCalculator: (show: boolean) => void;
};

const Navbar: React.FC<NavProps> = ({ user, theme, setShowCalculator }) => {
  const pathName = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    await logout();
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const color = theme === "dark" ? "text-[#8B3A2D]" : "text-white";

  return (
    <nav className='absolute top-0 left-0 z-20 w-full flex items-center text-[14px] px-6 lg:px-24 py-4 bg-transparent'>
      <div className='container mx-auto w-full flex items-center justify-between'>
        {/* Left Section: Logo */}
        <div className='flex items-center'>
          <Image
            src={`${theme === "dark" ? "/kora-logo-dark.png" : "/logo-kora.png"}`}
            width={103}
            height={30}
            alt='KORA Logo'
            className='h-8 mr-2'
          />
        </div>

        {/* Middle Section: Navigation Links */}
        <div className='hidden lg:flex gap-6 justify-center'>
          {NavLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className={`${
                link.url === pathName ? color : "text-[#D2691E]"
              } ${pathName === "/favourites" ? "hover:text-[#8B3A2D]" : "hover:text-white"}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Section: Buttons and Avatar */}
        <div className='flex items-center gap-4 lg:gap-8 justify-between mr-4'>
          {pathName === "/" &&
            (theme === "dark" ? (
              <button
                className='hidden lg:block px-4 py-2 text-[12px] border-[1px] border-[#8B3A2D] text-[#8B3A2D] rounded-full hover:bg-[#8B3A2D] hover:text-white'
                onClick={() => setShowCalculator(true)}
              >
                Affordability Calculator
              </button>
            ) : (
              <button
                onClick={() => setShowCalculator(true)}
                className='hidden lg:block px-4 py-2 border-[1px] text-[12px] border-[#F5DEB3] text-[#F5DEB3] rounded-full hover:bg-[#F5DEB3] hover:text-white'
              >
                Affordability Calculator
              </button>
            ))}

          {!user ? (
            <div className='hidden lg:flex gap-6 justify-center text-[14px]'>
              <a
                href='/login'
                className={` ${
                  pathName === "/" ? color : "text-[#D2691E]"
                } hover:${color}`}
              >
                Login
              </a>
              <a
                href='/sign-up'
                className={` ${
                  pathName === "/" ? color : "text-[#D2691E]"
                } hover:${color}`}
              >
                Sign Up
              </a>
            </div>
          ) : (
            <div className='relative flex gap-6'>
              {theme === "dark" ? (
                <button className='hidden lg:block px-4 py-2 border-[1px] border-[#8B3A2D] text-[#8B3A2D] rounded-full hover:bg-[#8B3A2D] hover:text-white'>
                  Become a host
                </button>
              ) : (
                <button className='hidden lg:block px-4 py-2 border-[1px] border-[#F5DEB3] text-[#F5DEB3] rounded-full hover:bg-[#F5DEB3] hover:text-white'>
                  Become a host
                </button>
              )}
              <button
                className='flex items-center gap-2'
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                <div className=' bg-orange-500 p-1 rounded-full'>
                  <MdArrowDropDown className='text-gray-300' />
                </div>
                <Image
                  src='/avatar.png'
                  alt='User Avatar'
                  width={46}
                  height={46}
                  className='h-10 w-10 rounded-full border-2'
                />
              </button>
              {dropdownOpen && (
                <div className='hidden lg:block absolute top-14 w-full right-0 bg-white shadow-lg rounded-md p-2 px-1 z-30'>
                  <div className='px-2 py-2 border-b border-[#697D95]'>
                    <p className='font-bold text-[18px] text-[#8B3A2D]'>
                      Hi, Sullie
                    </p>
                    <p
                      className={`text-[14px] text-gray-500 ${cabin.className}`}
                    >
                      {user.email}
                    </p>
                  </div>
                  <ul
                    className={`py-2 px-2 ${cabin.className} text-[14px] font-semibold border-b border-[#697D95]`}
                  >
                    <li className='px-2 py-2 hover:bg-gray-100 cursor-pointer'>
                      Messages
                    </li>
                    <li className='px-2 py-2 hover:bg-gray-100 cursor-pointer'>
                      Notifications
                    </li>
                    <li className='px-2 py-2 hover:bg-gray-100 cursor-pointer'>
                      Account
                    </li>
                  </ul>
                  <div
                    className={`px-4 py-2 ${cabin.className} text-[14px] font-semibold`}
                  >
                    <li className='list-none py-2 hover:bg-gray-100 cursor-pointer'>
                      Help Center
                    </li>
                    <button
                      className='text-red-500 hover:underline'
                      onClick={handleLogout}
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav />
    </nav>
  );
};

export default Navbar;
