import { cabin } from "../fonts";

export default function PriceCard() {
  return (
    <div className="bg-white md:pt-[30px] md:px-[20px] max-h-[412px] md:shadow-lg md:rounded-[20px]">
      <h2 className="text-[18px] font-bold">Listing Price</h2>
      <p className="text-gray-700 text-[18px]">NGN 596,000</p>
      <button className={`${cabin.className} bg-[#D2691E] text-white px-4 py-2 rounded-md mt-4 w-full`}>Purchase Now</button>
      <ul className={`${cabin.className} space-y-4 text-[18px]list-none py-12 border-b-[0.5px]`}>
        <li className="flex justify-between text-[16px] font-semibold">
          <span className=" opacity-50">Tax for indoor payment</span>
          <span>NGN 300,000</span>
        </li>
        <li className="flex justify-between text-[16px] font-semibold">
          <span className=" opacity-50">Tax for indoor payment</span>
          <span>NGN 300,000</span>
        </li>
        <li className="flex justify-between text-[16px] font-semibold">
          <span className=" opacity-50">Tax for indoor payment</span>
          <span>NGN 300,000</span>
        </li>
      </ul>
      <li className={`${cabin.className} flex justify-between text-[20px] font-semibold`}>
        <span className=" opacity-50">Total Price</span>
        <span>NGN 3, 000,000</span>
      </li>
    </div>
  );
}
