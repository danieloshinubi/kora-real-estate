"use client";
import { useUser } from "@/app/context/UserContext";
import { usePathname, useRouter } from "next/navigation";
import { cabin } from "../fonts";
import MyFlutterwaveButton from "../payment/FlutterwaveButton";

type PriceCardProps = {
  price: number;
  propertyName: string;
};

export default function PriceCard({ price, propertyName }: PriceCardProps) {
  const formattedPrice = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(price);

  const { user } = useUser();
  const router = useRouter();
  const pathName = usePathname();

  const handlePurchaseClick = () => {
    if (!user) {
      router.push(`/login?redirect=${encodeURIComponent(pathName as string)}`);
    }
  };

  return (
    <div className='bg-white md:pt-[30px] md:px-[20px] max-h-[512px] md:max-h-[412px] md:shadow-2xl md:rounded-[20px]'>
      <h2 className='text-[18px] font-bold'>Listing Price</h2>
      <p className='text-gray-700 text-[18px]'>{formattedPrice}</p>
      {user ? (
        <MyFlutterwaveButton
          amount={price}
          currency='NGN'
          email={user.email}
          phoneNumber={user.phoneNo}
          name='Customer Name'
          propertyName={propertyName}
        />
      ) : (
        <button
          onClick={handlePurchaseClick}
          className={`${cabin.className} bg-[#D2691E] text-white px-4 py-2 rounded-md mt-4 w-full`}
        >
          Sign In to Purchase
        </button>
      )}
      <ul
        className={`${cabin.className} md:space-y-4 text-[18px] list-none py-4 lg:py-12 border-b-[0.5px]`}
      >
        <li className='flex justify-between text-[16px] font-semibold'>
          <span className=' opacity-50'>Tax for Indoor payment</span>
          <span>NGN 0.000</span>
        </li>
        <li className='flex justify-between text-[16px] font-semibold'>
          <span className=' opacity-50'>Tax for Outdoor payment</span>
          <span>NGN 0.000</span>
        </li>
        <li className='flex justify-between text-[16px] font-semibold'>
          <span className=' opacity-50'>Govt. Servance</span>
          <span>NGN 0.000</span>
        </li>
      </ul>
      <li
        className={`${cabin.className} flex justify-between text-[15px] lg:text-[20px] font-semibold`}
      >
        <span className=' opacity-50'>Total Price</span>
        <span>{formattedPrice}</span>
      </li>
    </div>
  );
}
