import React from 'react'
import { cabin } from '../fonts'

export default function FinalSection() {
  return (
    <section className='pt-24 pb-64 px-4 flex justify-between'>
          <div className='gap-4'>
            <h2 className='text-[28px] font-bold text-gray-800'>
              Country Outreach
            </h2>
            <p className={` mt-2 text-[16px] ${cabin.className}`}>
              Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse
              semper nunc blandit at ac luctus. Viverra diam in sit ultrices in et
              proin lorem ipsum. Feugiat etiam scelerisque aliquet vitae mauris
              ornare quis eget tincidunt. Sapien aliquet aliquet ut curabitur.
              Aliquet leo arcu tellus.
            </p>
            <p className={` mt-2 text-[16px] ${cabin.className}`}>
              Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse
              semper nunc blandit at ac luctus. Viverra diam in sit ultrices in et
              proin lorem ipsum. Feugiat etiam scelerisque aliquet vitae mauris
              ornare quis eget tincidunt. Sapien aliquet aliquet ut curabitur.
              Aliquet leo arcu tellus.
            </p>
          </div>
    </section>
  )
}
