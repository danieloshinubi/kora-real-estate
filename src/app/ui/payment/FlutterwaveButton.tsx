import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { cabin } from "../fonts";
import { FlutterWaveResponse } from "flutterwave-react-v3/dist/types";

type MyFlutterwaveButtonProps = {
  amount: number;
  currency: string;
  email: string;
  phoneNumber: string;
  name: string;
  propertyName: string;
};

const FLUTTERWAVE_PUBLIC_KEY = process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY;

export default function MyFlutterwaveButton({
  amount,
  currency,
  email,
  phoneNumber,
  name,
  propertyName,
}: MyFlutterwaveButtonProps) {
  const config = {
    public_key: FLUTTERWAVE_PUBLIC_KEY as string, // Ensure this is always a string
    tx_ref: Date.now().toString(),
    amount,
    currency,
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email,
      phone_number: phoneNumber,
      name,
    },
    customizations: {
      title: "KORA Real Estate",
      description: propertyName,
      logo: "/kora-logo.png",
    },
  };

  const fwConfig = {
    ...config,
    text: "Purchase Now",
    callback: (response: FlutterWaveResponse) => {
      // Explicitly define the type for response
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div
      className={`${cabin.className} bg-[#D2691E] text-white px-4 py-2 rounded-md mt-4 w-full`}
    >
      <FlutterWaveButton {...fwConfig} className='w-full' />
    </div>
  );
}
