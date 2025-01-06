"use client";

import React, { useState, useEffect } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import FinalStep from "./FinalStep";

import {
  useSignUpMutation,
  useGetPropertyTypesQuery,
} from "../../utils/services/api";

import { FetchedPropertyType } from "../../utils/services/api";

type SignupFormProps = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

type PropertyType = {
  name: string;
  _id: string;
  toggle: boolean;
};

const SignupForm: React.FC<SignupFormProps> = ({ step, setStep }) => {
  const nextStep = async () => setStep((prev) => prev + 1);

  // Form Step one states
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [phoneNo, setPhoneNo] = useState<string>("");

  //backend services
  const [signUp] = useSignUpMutation();
  const { data } = useGetPropertyTypesQuery();

  // Form Step two
  const [propertyTypes, setPropertyTypes] = useState<PropertyType[]>([]);

  useEffect(() => {
    if (data) {
      const propertyTypesArray = data?.propertyTypes?.map(
        (type: FetchedPropertyType) => ({
          name: type.name,
          _id: type._id,
          toggle: false,
        })
      );

      setPropertyTypes(propertyTypesArray);
    }
  }, [data]);

  //Final step loading for signup
  const [isLoading, setIsLoading] = useState(false);

  const [userPropertyPreference, setUserPropertyPreference] = useState<
    object[]
  >([]);

  // const userProfileInfo = {
  //   user: "60d5f7c9d7a2c943bf0ef12d",
  //   propertyType: ["60d5f7c9d7a2c943bf0ef13d"],
  //   bedrooms: 3,
  //   pets: 2,
  //   minPrice: 100000,
  //   maxPrice: 500000,
  //   location: {
  //     longitude: 12.9716,
  //     latitude: 77.5946,
  //   },
  // };

  const handleSignUp = async () => {
    setIsLoading(true);

    try {
      const {data} = await signUp({ email: email, password: password, phoneNo: phoneNo });
      if (data?.message){
        console.log(data.message);
      }
      nextStep();
    } catch (error) {
      console.log("Signup failed. Try again.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='overflow-y-scroll flex items-center h-[calc(100%-52px)]'>
      {step === 1 && (
        <StepOne
          nextStep={nextStep}
          setEmail={setEmail}
          email={email}
          setPassword={setPassword}
          password={password}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          handleSignUp={handleSignUp}
          setPhoneNo={setPhoneNo}
        />
      )}
      {step === 2 && (
        <StepTwo
          nextStep={nextStep}
          propertyTypes={propertyTypes}
          setPropertyTypes={setPropertyTypes}
          setUserPropertyPreference={setUserPropertyPreference}
        />
      )}
      {step === 3 && <StepThree nextStep={nextStep} />}
      {step === 4 && <StepFour nextStep={nextStep} />}
      {step === 5 && (
        <FinalStep handleSignUp={handleSignUp} isLoading={isLoading} />
      )}
    </div>
  );
};

export default SignupForm;
