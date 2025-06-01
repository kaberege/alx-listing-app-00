import React from 'react';
import Image from 'next/image';
import { PROPERTYLISTINGSAMPLE } from '@/constants';

export default function Home() {
  return (
    <>
      <section className='px-4 xl:px-0'>
        <div
          className='bg-[url("/assets/hero-section-image/Image_mobile.png")] sm:bg-[url("/assets/hero-section-image/Image_desktop.png")] 
          bg-center bg-no-repeat bg-cover h-[296px] sm:h-[421px] lg:h-[481px] w-full max-w-7xl rounded-3xl mx-auto flex items-center justify-center'>
          <div className='text-white text-center'>
            <h1 className='text-[28.28px] sm:text-[68.63px] lg:text-[94px] font-semibold'>Find your favorite<br />place here!</h1>
            <h2 className='text-[7.42px] sm:text-[18px] lg:text-[24px]  font-medium'>The best prices for over 2 million properties worldwide.</h2>
          </div>
        </div>
      </section>
      <section className='w-full max-w-7xl mx-auto max-sm:overflow-x-hidden px-4 xl:px-0 flex items-center justify-between gap-3 py-5 whitespace-nowrap'>
        <div className='flex items-center gap-3 text-zinc-900 text-[13.78px] sm:text-sm font-semibold'>
          <button
            type="button"
            className='flex items-center justify-center border-[1px] border-neutral-300 hover:border-teal-600 rounded-full p-1 cursor-pointer 
            hover:bg-teal-50 transition-colors hover:shadow-sm hover:shadow-teal-600 sm:hidden w-8 h-8'
          >
            <Image src="/assets/icons/Linear/Essentional, UI/Filter.png" width={18} height={18} alt='Filter' />
          </button>
          <button
            type="button"
            className='border-[1px] border-teal-600 rounded-full px-3 py-1 cursor-pointer 
          bg-teal-50 text-teal-600 transition-colors shadow-sm shadow-teal-600'
          >
            All
          </button>
          <button
            type="button"
            className='border-[1px] border-neutral-300 hover:border-teal-600 rounded-full px-2 py-1 cursor-pointer 
            hover:bg-teal-50 hover:text-teal-600 transition-colors hover:shadow-sm hover:shadow-teal-600'
          >
            Top Villa
          </button>
          <button
            type="button"
            className='border-[1px] border-neutral-300 hover:border-teal-600 rounded-full px-2 py-1 cursor-pointer 
            hover:bg-teal-50 hover:text-teal-600 transition-colors hover:shadow-sm hover:shadow-teal-600'
          >
            Free Reschedule
          </button>
          <button
            type="button"
            className='border-[1px] border-neutral-300 hover:border-teal-600 rounded-full px-2 py-1 cursor-pointer 
            hover:bg-teal-50 hover:text-teal-600 transition-colors hover:shadow-sm hover:shadow-teal-600 
            sm:hidden lg:block'
          >
            Book Now, Pay later
          </button>
          <button
            type="button"
            className='border-[1px] border-neutral-300 hover:border-teal-600 rounded-full px-2 py-1 cursor-pointer 
            hover:bg-teal-50 hover:text-teal-600 transition-colors hover:shadow-sm hover:shadow-teal-600 
            sm:hidden lg:block'
          >
            Self CheckIn
          </button>
          <button
            type="button"
            className='border-[1px] border-neutral-300 hover:border-teal-600 rounded-full px-2 py-1 cursor-pointer 
            hover:bg-teal-50 hover:text-teal-600 transition-colors hover:shadow-sm hover:shadow-teal-600 
           sm:hidden lg:block'
          >
            Instant Book
          </button>
          <button
            type="button"
            className='hidden sm:flex lg:hidden items-center justify-center border-[1px] border-neutral-300 hover:border-teal-600 rounded-full p-1 cursor-pointer 
            hover:bg-teal-50 transition-colors hover:shadow-sm hover:shadow-teal-600'
          >
            <Image src="/assets/icons/Linear/Arrows/Alt Arrow Down.png" width={19} height={19} alt='Filter' />
          </button>
        </div>
        <div className='flex items-center gap-3 text-[13.78px] sm:text-sm font-semibold'>
          <button
            type="button"
            className='hidden sm:flex items-center justify-center gap-1 border-[1px] border-neutral-300 hover:border-teal-600 
            rounded-full px-2 py-1 cursor-pointer hover:bg-teal-50 hover:text-teal-600 transition-colors hover:shadow-sm
             hover:shadow-teal-600'
          >
            <span className='hidden lg:block'>Filter</span>
            <Image src="/assets/icons/Linear/Essentional, UI/Filter.png" width={18} height={18} alt='Filter' />
          </button>
          <button
            type="button"
            className='border-[1px] border-neutral-300 hover:border-teal-600 rounded-full px-2 py-1 cursor-pointer 
            hover:bg-teal-50 hover:text-teal-600 transition-colors hover:shadow-sm hover:shadow-teal-600'
          >
            <span className='opacity-50'>Sort by: </span><span>Highest Price</span>
          </button>
        </div>
      </section>
      <section>
        {
          PROPERTYLISTINGSAMPLE.map((item, index) => (
            <div key={index}>
              <div>
                <Image src={item.image} width={98} height={68} alt={item.name}
                  className=''
                />
              </div>
              <div className='flex items-center gap-2 text-zinc-900 text-[12.16px] font-medium'>
                <button
                  type="button"
                  className='bg-zinc-200 rounded-full px-2 py-1 cursor-pointer hover:bg-teal-100 
                  hover:text-teal-600 transition-colors'
                >
                  Top Villa
                </button>
                <button
                  type="button"
                  className='bg-zinc-200 rounded-full px-2 py-1 cursor-pointer hover:bg-teal-100 
                  hover:text-teal-600 transition-colors'
                >
                  Self CheckIn
                </button>
                <button
                  type="button"
                  className='bg-zinc-200 rounded-full px-2 py-1 cursor-pointer hover:bg-teal-100 
                  hover:text-teal-600 transition-colors'
                >
                  Free Reschedule
                </button>
              </div>
              <div>
                <div>
                  <h2>{item.name}</h2>
                  <div>
                    <Image src="/assets/icons/Star 2.png" width={18} height={18} alt='star' />
                    <span>{item.rating}</span>
                  </div>
                </div>
                <h3>{item.address.state} {item.address.city} {item.address.country}</h3>
                <div>
                  <div>
                    <div>
                      <Image src="/assets/icons/bed 1.png" width={18} height={18} alt='Bed' />
                      <span>{item.offers.bed}</span>
                    </div>
                    <div>
                      <Image src="/assets/icons/bathtub 1.png" width={18} height={18} alt='Shower' />
                      <span>{item.offers.shower}</span>
                    </div>
                    <div>
                      <Image src="/assets/icons/people 1.png" width={18} height={18} alt='Occupants' />
                      <span>{item.offers.occupants}</span>
                    </div>
                  </div>
                  <span>{item.discount}</span>
                </div>
              </div>
            </div>
          ))
        }
      </section>
    </>
  );
}
