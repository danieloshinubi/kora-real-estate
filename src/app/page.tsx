"use client";
import { useUser } from "./context/UserContext";
import Navbar from "./ui/Navbar";
import HomeHero from "./ui/home/HomeHero";

export default function Home() {
  const { user } = useUser();
  console.log(user);
  return (
    <div className=''>
      <Navbar />
      <HomeHero />
    </div>
  );
}
