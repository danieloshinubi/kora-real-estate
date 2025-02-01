import React from "react";
import Image from "next/image";
import { cabin } from "../fonts";
import { FaQuoteRight } from "react-icons/fa6";

const testimonials = [
  {
    id: 1,
    name: "Name Lastname",
    role: "Realtor",
    avatar: "/review-man.jpeg", // Replace with actual image URL
    quote:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
    rating: 9.8,
  },
  {
    id: 2,
    name: "Name Lastname",
    role: "Realtor",
    avatar: "/review-woman.jpeg", // Replace with actual image URL
    quote:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
    rating: 9.8,
  },
  {
    id: 3,
    name: "Name Lastname",
    role: "Real Guy",
    avatar: "/review-woman.jpeg", // Replace with actual image URL
    quote:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
    rating: 9.8,
  },
  {
    id: 4,
    name: "Name Lastname",
    role: "Realest Nigga",
    avatar: "/review-woman.jpeg", // Replace with actual image URL
    quote:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
    rating: 9.8,
  },
];

type TestimonialCardProps = {
  slice: number[];
//   setSlice: React.Dispatch<React.SetStateAction<number[]>>;
};
const TestimonialCard = ({ slice }: TestimonialCardProps) => {
  return (
    <div
      className={`flex flex-col items-center bg-[#F5DEB3] rounded-lg p-6 space-y-4 w-full max-w-md mx-auto ${cabin.className}`}
    >
      {testimonials.slice(...slice).map((testimonial, index) => (
        <div key={index} className='bg-white rounded-lg shadow-md p-4 w-full'>
          <div className='relative flex items-center gap-4'>
            <div className='relative w-[71px] h-[71px]'>
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                fill
                className='w-12 h-12 rounded-full object-cover'
              />
            </div>

            <div>
              <h4 className='text-lg font-semibold'>{testimonial.name}</h4>
              <p className='text-sm text-[#8B3A2D]'>{testimonial.role}</p>
            </div>
            <div className='ml-auto'>
              <FaQuoteRight className='w-[60px] h-[60px]' />
            </div>
          </div>
          <div className='border-t-[1px] my-3 border-black'></div>
          <div className='flex flex-col gap-2'>
            <h3 className='text-[18px] font-semibold'>
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <p className='italic text-gray-600 text-[16px] leading-[23px]'>{`"${testimonial.quote}"`}</p>
          </div>
          <div className='flex items-center mt-4'>
            <div className='font-bold text-[18px]'>
              <span role='img' aria-label='star'>
                🌟
              </span>
              {testimonial.rating}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCard;
