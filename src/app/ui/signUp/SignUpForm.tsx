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
  useCreateProfileMutation,
} from "../../utils/services/api";

import { FetchedPropertyType } from "../../utils/services/api";
import { LatLngTuple } from "leaflet";

type SignupFormProps = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

type PropertyType = {
  name: string;
  _id: string;
  toggle: boolean;
};

export type UserDetails = {
    _id: string;
    email: string;
    phoneNo: string;
    roles: {
      User: number;
    };
    isVerified: boolean;
    accountDisabled: boolean;
    createdAt: string;
    updatedAt: string;
    otp: string | null;
    password: string;
    __v: number;
};


export type UserProfileInfo = {
  user: string;
  propertyType: string[];
  bedrooms: number;
  pets: number;
  minPrice: number;
  maxPrice: number;
  location: {
    longitude: number;
    latitude: number;
  };
};

const SignupForm: React.FC<SignupFormProps> = ({ step, setStep }) => {
  const nextStep = async () => setStep((prev) => prev + 1);

  //backend services
  const [signUp] = useSignUpMutation();
  const { data } = useGetPropertyTypesQuery();
  const [createProfile] = useCreateProfileMutation();

  // Form Step One Action
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [phoneNo, setPhoneNo] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  const handleSignUp = async () => {
    setIsLoading(true);

    try {
      const { data, error } = await signUp({ email, password, phoneNo });

      if (!data) {
        if (error) {
          console.log(error);
          if ("status" in error) {
            // Handle FetchBaseQueryError
            if (error.status === 400) {
              setErrorMessage("Bad request");
            } else if (error.status === 409) {
              setErrorMessage("User already exists");
            } else if (error.status === 500) {
              setErrorMessage("Server error: Please Try Again");
            } else {
              setErrorMessage("Signup failed. Try again.");
            }
          } else {
            // Handle SerializedError
            setErrorMessage("An unexpected error occurred. Please try again.");
          }
        }
      } else {
        console.log(data.user);
        setUserDetails(data.user);
        nextStep();
      }
    } catch (error) {
      setErrorMessage("Signup failed. Try again.");
      if (error instanceof Error) {
        console.log("Error message:", error.message);
      } else {
        console.log("Unexpected error:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Form Step two Action
  const [propertyTypes, setPropertyTypes] = useState<PropertyType[]>([]);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<
    PropertyType[]
  >([]);

  const retrievePropertyTypes = (data: FetchedPropertyType[]) => {
    const propertyTypesArray = data.map((type: FetchedPropertyType) => ({
      name: type.name,
      _id: type._id,
      toggle: false,
    }));

    setPropertyTypes(propertyTypesArray);
  };

  useEffect(() => {
    if (data) {
      retrievePropertyTypes(data);
    }
  }, [data]);

  const selectedPropertyIds = selectedPropertyTypes.map((type) => type._id);

  //Form Step three Action
  const [preferredLocation, setPreferredLocation] = useState<LatLngTuple>([
    48.8584, 2.2945,
  ]);

  //Form Step four Action
  const [bedrooms, setBedrooms] = useState(4);
  const [pets, setPets] = useState(2);
  const [price, setPrice] = useState([0, 100000]); // Min and Max Price

  //Final step
  const userProfileInfo = {
    user: userDetails?._id || "",
    propertyType: selectedPropertyIds,
    bedrooms: bedrooms,
    pets: pets,
    minPrice: price[0],
    maxPrice: price[1],
    location: {
      latitude: preferredLocation[0],
      longitude: preferredLocation[1],
    },
  };

  const handleCreateUserProfile = async () => {
    try {
      const { data, error } = await createProfile(userProfileInfo);

      if (!data) {
        if (error) {
          if ("status" in error) {
            // Handle FetchBaseQueryError
            if (error.status === 400) {
              console.log(
                "Bad request, missing required fields or invalid input"
              );
            } else {
              console.log("Server error: Please Try Again");
            }
          } else {
            // Handle SerializedError
            console.log("An unexpected error occurred. Please try again.");
          }
        }
      } else {
        console.log(data.message);
        nextStep();
      }
    } catch (error) {
      console.log("Signup failed. Try again.");
      if (error instanceof Error) {
        console.log("Error message:", error.message);
      } else {
        console.log("Unexpected error:", error);
      }
    }
  };

  return (
    <div className='overflow-y-scroll flex flex-col items-center h-[calc(100%-52px)]'>
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
          isLoading={isLoading}
          errorMessage={errorMessage}
          setError={setErrorMessage}
        />
      )}
      {step === 2 && (
        <StepTwo
          nextStep={nextStep}
          propertyTypes={propertyTypes}
          setPropertyTypes={setPropertyTypes}
          setSelectedPropertyTypes={setSelectedPropertyTypes}
        />
      )}
      {step === 3 && (
        <StepThree
          nextStep={nextStep}
          setPreferredLocation={setPreferredLocation}
        />
      )}
      {step === 4 && (
        <StepFour
          bedrooms={bedrooms}
          setBedrooms={setBedrooms}
          pets={pets}
          setPets={setPets}
          price={price}
          setPrice={setPrice}
          handleCreateUserProfile={handleCreateUserProfile}
        />
      )}
      {step === 5 && (
        <FinalStep/>
      )}
    </div>
  );
};

export default SignupForm;
