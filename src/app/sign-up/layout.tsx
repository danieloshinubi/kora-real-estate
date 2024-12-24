import SignUpSidePane from "@/app/ui/SignUpSidePane";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col items-center justify-center h-screen p-8'>
      <div className='w-full h-full flex'>
        <SignUpSidePane/>
      </div>
      <div className='w-[60%] max-w-[540px] px-6 py-6 rounded-2xl flex flex-col justify-between bg-[#f5deb3] items-center'>
        {children}
      </div>
    </div>
  );
}
