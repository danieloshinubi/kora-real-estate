import SignUpSidePane from "@/app/ui/signUp/SignUpSidePane";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='relative w-full h-full flex flex-col overflow-x-hidden lg:flex-row lg:p-6 gap-8'>
        <SignUpSidePane />
        <div className='lg:w-[60%] px-6 flex flex-col justify-between items-center'>
          {children}
        </div>
      </div>
      <div className='absolute bottom-0 right-0 hidden lg:block'>
        <Image src='/design.png' height={200} width={200} alt='design' className="w-auto"/>
      </div>
    </div>
  );
}
