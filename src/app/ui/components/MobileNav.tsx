import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='lg:hidden'>
      <button onClick={toggleNav} className='text-2xl text-white'>
        {isOpen ? "" : <FaBars />}
      </button>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#00000086] shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        onClick={toggleNav}
      >
        <div className='w-3/4 sm:w-1/3 h-full  bg-white ' onClick={(e) => e.stopPropagation()}>
          <button onClick={toggleNav} className='text-2xl p-4'>
            <FaTimes />
          </button>
          <nav className='flex flex-col p-4'>
            <Link href='/' className='py-2 text-lg' onClick={toggleNav}>
              Home
            </Link>
            <Link href='/about' className='py-2 text-lg' onClick={toggleNav}>
              About
            </Link>
            <Link href='/services' className='py-2 text-lg' onClick={toggleNav}>
              Services
            </Link>
            <Link href='/contact' className='py-2 text-lg' onClick={toggleNav}>
              Contact
            </Link>
            {/* Add more links as needed */}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
