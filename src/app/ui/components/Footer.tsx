import React from "react";
// import { FiFacebook, FiArrowUp } from "react-icons/fi";
import { inter } from "../fonts";

const Footer: React.FC = () => {
  return (
    <footer className={`${inter.className} bg-[#2F4F4F] text-[#CFCDBE] py-6 px-5 h-[100vh] md:px-6`}>
      <div className="flex justify-between gap-8 h-full">
        {/* Subscribe Section */}
        <div className="bg-[#333333] p-6 rounded-lg flex flex-col h-[70%] max-w-[340px]">
          <h4 className="text-[28px] mb-4 text-[#CFCDBE]">Subscribe to our newsletter</h4>
          <div className="relative mt-auto">
            <input
              type="email"
              placeholder="your@email.ru"
              className="w-full py-3 pl-4 pr-12 bg-[#333333] bottom-b-[1px] border-gray-300 rounded-md focus:outline-none"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-orange-600">
              ➔
            </button>
          </div>
        </div>

        {/* Links Section */}
        <div className="ml-8">
          <h5 className="text-lg font-semibold mb-4">For applicants</h5>
          <ul className="space-y-2">
            <li>Directories</li>
            <li>Schedule</li>
            <li>Blog</li>
            <li>
              <a href="#" className="underline">
                MSU News
              </a>
            </li>
            <li>Admission Committee</li>
            <li>About The Faculty</li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-semibold mb-4">For students</h5>
          <ul className="space-y-2">
            <li>Courses</li>
            <li>Grants & Competitions</li>
            <li>Conferences</li>
            <li>Science</li>
            <li>The Library</li>
            <li>Festival of Science</li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h5 className="text-lg font-semibold mb-4">For PhD</h5>
          <div>
            <p>Selection Committee</p>
            <p>+1 891 989-11-92</p>
          </div>
          <div className="mt-4">
            <p>Add. Education</p>
            <p>+1 891 989-11-93</p>
          </div>
          <div className="mt-4">
            <p>Email</p>
            <p>info@logolipsum.com</p>
          </div>
          <div className="mt-4">
            <p>Address</p>
            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
