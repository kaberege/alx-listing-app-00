import React from 'react'
import Image from 'next/image'
import Minimalistic from '@/public/assets/icons/linear/school/Case Minimalistic.png'
import alxLogo from '@/public/assets/hero-section-image/alx-black.png'
import Magnifer from '@/public/assets/icons/linear/search/Magnifer.png'
import Profile from '@/public/assets/icons/profile 2.png'

const Header = () => {
  return (
    <header>
      <section className='bg-teal-600 p-2'>
        <div className='flex items-center justify-center gap-3'>
          <Image
            src={Minimalistic}
            width={24}
            height={24}
            alt="Email box"
            title='Email box'
            className='cursor-pointer'
          />
          <p className='text-white text-xs sm:text-base font-semibold'>Overseas trip? Get the latest information on travel guides</p>
          <button
            className='text-white hover:text-amber-50 text-xs sm:text-sm text-center cursor-pointer font-semibold bg-black rounded-full 
          px-2 py-1 hover:bg-slate-700 transition-colors'>
            More&nbsp;Info
          </button>
        </div>
      </section>
      <section className='w-full max-w-7xl bg-white flex items-center justify-between px-2 sm:px-4  xl:px-1 my-3 mx-auto'>
        <Image
          src={alxLogo}
          width={58.75}
          height={30.6}
          alt='alx logo'
          title='alx logo'
          className='cursor-pointer'
        />
        <div className='flex items-center gap-2 sm:gap-3 rounded-full border-[1px] border-neutral-300 py-1 sm:py-2 pl-4 sm:pl-6 pr-1 sm:p-2'>
          <div className='grid grid-cols-5'>
            <div className='col-span-2 flex flex-col border-r-[1px] pr-7 border-neutral-300'>
              <span className='text-zinc-900 font-medium text-sm'>Location</span>
              <span className='text-neutral-300 text-[13px]'>Search for destination</span>
            </div>
            <div className='flex flex-col border-r-[1px] px-7 border-neutral-300'>
              <span className='text-zinc-900 font-medium text-sm'>Check in</span>
              <span className='text-neutral-300 text-[13px]'>Add date</span>
            </div>
            <div className='flex flex-col border-r-[1px] px-7 border-neutral-300'>
              <span className='text-zinc-900 font-medium text-sm'>Check out</span>
              <span className='text-neutral-300 text-[13px]'>Add date</span>
            </div>
            <div className='flex flex-col pl-7'>
              <span className='text-zinc-900 font-medium text-sm'>People</span>
              <span className='text-neutral-300 text-[13px]'>Add guest</span>
            </div>
          </div>
          <div className='flex items-center justify-center w-10 h-10 rounded-full bg-amber-500 hover:bg-amber-400 transition-colors cursor-pointer'>
            <Image
              src={Magnifer}
              width={20}
              height={20}
              alt='Search'
            />
          </div>
        </div>
        <div className='lg:hidden flex items-center justify-center rounded-full bg-teal-600'>
           <Image
              src={Profile}
              width={30}
              height={30}
              alt='profile'
              className='cursor-pointer'
            />
        </div>
        <div className='flex gap-2 max-lg:hidden'>
          <div
            className='flex items-center justify-center text-white text-base bg-teal-600 rounded-full 
            py-1 px-3 hover:bg-teal-700 transition-colors cursor-pointer shadow-sm shadow-teal-900'
          >Sign in
          </div>
          <div
            className='flex items-center justify-center text-zinc-900 text-base rounded-full shadow-sm shadow-zinc-500
            border-1 border-neutral-200  hover:bg-neutral-300 transition-colors cursor-pointer py-1 px-3'
          >
            Sign up
          </div>
        </div>
      </section>
      <section>

      </section>
    </header>
  )
}

export default Header