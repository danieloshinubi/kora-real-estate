import SignUpSidePane from "@/app/ui/SignUpSidePane";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex items-center justify-center h-screen p-8'>
      <div className='w-full h-full flex'>
        <SignUpSidePane />
        <div className='w-[60%] px-6 py-6 rounded-2xl flex flex-col justify-between items-center'>
          {children}
        </div>
      </div>
      <div className='absolute bottom-0 right-0'>
        <Image src='/design.png' height={300} width={300} alt='design' />
      </div>
    </div>
  );
}
