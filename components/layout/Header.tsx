import React from 'react'
import Image from 'next/image'
import { TypesOfAcommodation } from '@/constants'

const Header = () => {
  return (
    <header>
      <section className='bg-teal-600 p-2'>
        <div className='flex items-center justify-center gap-3'>
          <Image
            src="/assets/icons/linear/school/Case Minimalistic.png"
            width={24}
            height={24}
            alt="Email box"
            title='Email box'
            className='cursor-pointer'
          />
          <p className='text-white text-xs sm:text-base font-semibold'>Overseas trip? Get the latest information on travel guides</p>
          <button
            className='text-white hover:text-amber-50 text-xs sm:text-sm text-center cursor-pointer font-semibold bg-black rounded-full 
          px-2 py-1 hover:bg-slate-700 focus:ring-2 focus:ring-slate-950 transition-colors'>
            More&nbsp;Info
          </button>
        </div>
      </section>
      <section className='py-4 border-b-[1px] border-b-neutral-300 overflow-hidden'>
        <div className='w-full max-w-7xl bg-white flex items-center justify-between px-2 sm:px-4  xl:px-1 mx-auto'>
          <Image
            src="/assets/hero-section-image/alx-black.png"
            width={58.75}
            height={30.6}
            alt='alx logo'
            title='alx logo'
            className='cursor-pointer hidden sm:block max-md:w-[40px] max-md:h-[20px]'
          />
          <div className='rounded-full border-[1px] border-neutral-300 py-1 pl-4 pr-1'>
            <form className='flex items-center'>
              <div className='sm:hidden'>
                <p className='text-xs font-semibold'>Where to</p>
                <div className='flex items-center gap-2'>
                  <input
                    type="search"
                    name="location"
                    id="locations"
                    className='text-neutral-500 text-[11px] outline-none w-[66px]'
                    placeholder='Location'
                  />
                  <span className='w-1 h-1 rounded-full bg-neutral-500'></span>
                  <input
                    type="date"
                    name="check-out"
                    id="check-outs"
                    className='text-neutral-500 text-[11px] outline-none w-[50px]'
                    placeholder='Date'
                  />
                  <span className='w-1 h-1 rounded-full bg-neutral-500'></span>
                  <input
                    type="search"
                    name="people"
                    id="person"
                    className='text-neutral-500 text-[11px] outline-none w-[80px]'
                    placeholder='Add guest'
                  />
                </div>
              </div>
              <div className='hidden sm:grid grid-cols-5 w-full sm:max-w-md lg:max-w-2xl'>
                <div className='col-span-2 sm:flex flex-col pr-2 border-r-[1px] border-neutral-300'>
                  <label htmlFor='location' className='text-zinc-900 font-medium text-sm'>Location</label>
                  <input
                    type="search"
                    name="location"
                    id="location"
                    className='text-neutral-500 text-[13px] outline-none'
                    placeholder='Search for destination'
                  />
                </div>
                <div className='flex flex-col px-2 border-r-[1px] border-neutral-300'>
                  <label htmlFor='check-in' className='text-zinc-900 font-medium text-sm'>Check in</label>
                  <input
                    type="date"
                    name="check-in"
                    id="check-in"
                    className='text-neutral-500 text-[13px] outline-none'
                    placeholder='Add date'
                  />
                </div>
                <div className='flex flex-col px-2 border-r-[1px] border-neutral-300'>
                  <label htmlFor='check-out' className='text-zinc-900 font-medium text-sm'>Check out</label>
                  <input
                    type="date"
                    name="check-out"
                    id="check-out"
                    className='text-neutral-500 text-[13px] outline-none'
                    placeholder='Add date'
                  />
                </div>
                <div className='flex flex-col pl-2'>
                  <label htmlFor='people' className='text-zinc-900 font-medium text-sm'>People</label>
                  <input
                    type="search"
                    name="people"
                    id="people"
                    className='text-neutral-500 text-[13px] outline-none'
                    placeholder='Add guest'
                  />
                </div>
              </div>
              <button className='flex items-center justify-center w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-amber-500 hover:bg-amber-400 transition-colors cursor-pointer'>
                <Image
                  src="/assets/icons/linear/search/Magnifer.png"
                  width={20}
                  height={20}
                  alt='Search'
                  className='max-sm:w-[17px] max-sm:h-[17px]'
                />
              </button>
            </form>
          </div>
          <button className='lg:hidden flex items-center justify-center rounded-full w-[30px] h-[30px] bg-teal-600'>
            <Image
              src="/assets/icons/profile 2.png"
              width={30}
              height={30}
              alt='profile'
              className='cursor-pointer'
            />
          </button>
          <div className='flex gap-2 max-lg:hidden'>
            <button
              className='flex items-center justify-center text-white text-base bg-teal-600 rounded-full focus:ring-2 focus:ring-teal-800
            py-1 px-3 hover:bg-teal-700 transition-colors cursor-pointer shadow-sm shadow-teal-900'
            >Sign in
            </button>
            <button
              className='flex items-center justify-center text-zinc-900 text-base rounded-full shadow-sm shadow-zinc-500 focus:ring-2 focus:ring-zinc-700
            border-1 border-neutral-200  hover:bg-neutral-300 transition-colors cursor-pointer py-1 px-3'
            >
              Sign up
            </button>
          </div>
        </div>
      </section>
      <section className='flex items-center justify-between gap-5 px-3 xl:px-1 w-full max-w-7xl mx-auto py-5 overflow-x-hidden'>
        {
          TypesOfAcommodation.map((type, index) => (
            <div 
            key={index} 
            className='flex flex-col gap-1 items-center justify-center h-16 pb-2 hover:border-b-2 hover:border-b-neutral-600
            cursor-pointer transition-transform duration-300 text-neutral-500 hover:text-neutral-800'
            >
              <Image src={type.image} width={34} height={34} alt={type.name} />
              <span className='text-xs font-medium whitespace-nowrap'>{type.name}</span>
            </div>
          ))
        }
      </section>
    </header>
  )
}

export default Header