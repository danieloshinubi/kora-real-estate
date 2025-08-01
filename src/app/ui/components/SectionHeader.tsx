import { cabin } from "../fonts";

export default function SectionHeader() {
  return (
    <div className='text-center w-full lg:w-1/2 mx-auto'>
      <h1 className='text-[18px] sm:text-[20px] lg:text-[28px]  lg:leading-[72px] text-left lg:text-center'>
        Find spaces that suit your style
      </h1>
      <p className={`text-gray-600 ${cabin.className} text-[16px] text-left lg:text-center`}>
      Discover a collection of thoughtfully curated properties that reflect your unique taste and meet your every need.
      </p>
    </div>
  );
}
