import React from "react";
import { FiFacebook, FiArrowUp, FiYoutube } from "react-icons/fi";
import { inter } from "../fonts";

const Footer: React.FC = () => {
  return (
    <footer
      className={`${inter.className} bg-[#2F4F4F] text-[#CFCDBE] box-border py-6 px-5 h-[100vh] md:px-6`}
    >
      <div className='h-full flex flex-col gap-8'>
        <div className='flex gap-8 '>
          {/* Subscribe Section */}
          <div className='relative space-y-4 '>
            <div className='bg-[#333333] h-full p-6 rounded-lg flex flex-col max-w-[340px]'>
              <h4 className='text-[28px] mb-4 text-[#CFCDBE]'>
                Subscribe to our newsletter
              </h4>
              <div className='relative mt-auto'>
                <input
                  type='email'
                  placeholder='your@email.ru'
                  className='w-full py-3 pl-4 pr-12 bg-[#333333] bottom-b-[1px] border-gray-300 rounded-md focus:outline-none'
                />
                <button className='absolute right-2 top-1/2 transform -translate-y-1/2 text-orange-600'>
                  ➔
                </button>
              </div>
            </div>
            <div className='text-[#6F6D66] mb-0 flex'>
              <div className=' p-6'>
                <FiArrowUp className='text-4xl' />
              </div>
              <div className='flex flex-col gap-4 py-4 text-xl'>
                <FiFacebook />
                <FiYoutube />
              </div>
            </div>
            <p className='text-[#6F6D66] '>© 2023 — Copyright</p>
          </div>
          <div className='ml-8'>
            <div className='w-[434px] flex justify-between gap-8'>
              <h1>For Applicants</h1>
              <h1>For Students</h1>
              <h1>For PhD</h1>
            </div>
            <div className='mb-16'>
              <div className='flex  justify-between gap-64  text-[10px]'>
                <div className='flex flex-col gap-2 '>
                  <h5 className='text-[#6F6D66] py-12'>INFO</h5>
                  <ul className='space-y-1 text-[20px] text-[#B2B1AA] leading-[-1%] '>
                    <li>Directories</li>
                    <li>Schedule</li>
                    <li>Blog</li>
                    <li>
                      <a href='#' className=''>
                        MSU News
                      </a>
                    </li>
                    <li>Admission Committee</li>
                    <li>About The Faculty</li>
                  </ul>
                </div>
                <div className='flex flex-col gap-2'>
                  <h5 className='text-[#6F6D66] py-12'>ADDITIONAL</h5>
                  <div>
                    <ul className='space-y-2 text-[14px] text-[#B2B1AA]'>
                      <li>Courses</li>
                      <li>Grants & Competitions</li>
                      <li>Conferences</li>
                      <li>Science</li>
                      <li>The Library</li>
                      <li>Festival of Science</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <button className='bg-[#D2691E] text-white py-[10px] px-[18px] rounded-[6px] w-[140px]'>
              Send
            </button>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className='flex gap-8 w-full'>
          <div className='w-[340px]'></div>
          <div className='flex flex-col gap-8 ml-8'>
            <div className='flex gap-12'>
              <div>
                <p className='text-[#6F6D66] text-[10px] leading-[14px]'>
                  Selection Committee
                </p>
                <p className='text-[14px] text-[#B2B1AA]'>+1 891 989-11-92</p>
              </div>
              <div>
                <p className='text-[#6F6D66] text-[10px] leading-[14px]'>
                  Add. Education
                </p>
                <p className='text-[14px] text-[#B2B1AA]'>+1 891 989-11-93</p>
              </div>
              <div>
                <p className='text-[#6F6D66] text-[10px] leading-[14px]'>
                  Email
                </p>
                <p className='text-[14px] text-[#B2B1AA]'>
                  info@logolipsum.com
                </p>
              </div>
            </div>

            <div>
              <p className='text-[#6F6D66] text-[10px] leading-[14px]'>
                Address
              </p>
              <p className='text-[14px] text-[#B2B1AA]'>
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
