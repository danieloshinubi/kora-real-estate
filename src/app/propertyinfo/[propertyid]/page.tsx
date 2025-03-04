"use client"
import { useUser } from '@/app/context/UserContext';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/app/ui/Navbar';
import Footer from '@/app/ui/components/Footer';
import { cabin } from '@/app/ui/fonts';
import { FaChevronLeft } from 'react-icons/fa6';
import ListingPage from '@/app/ui/listing/ListingPageSection';


export default function ListingDetailPage() {
  const { user } = useUser();
  const params = useParams(); // Get route params
  const propertyId = params?.propertyid; // Ensure the parameter name matches the dynamic route folder name

  return (
    <div className=''>
      <div className='text-[#8B3A2D]'>
        <Navbar user={user} theme='dark' />
      </div>

      <div className='relative container mx-auto px-6 lg:px-24 w-full'>
        <Link href='/' passHref>
          <div
            className={`${cabin.className} text-[16px] mt-24 md:mt-32 md:px-6 flex items-center`}
          >
            <FaChevronLeft />

            <h2 className=''>Back to Home Page</h2>
          </div>
        </Link>
        <ListingPage propertyId={propertyId as string} />
      </div>

      <Footer />
    </div>
  );
}
