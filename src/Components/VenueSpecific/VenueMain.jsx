import React from 'react';
import VenueAside from './VenueAside';
import VenueBanner from './VenueBanner';
import VenueHighlightsTablet from './VenueHighlightsTablet';

const VenueMain = () => {


  return (
    <section className='mt-12'>
      <div className='xxl:w-[1200px] mx-auto'>
        <VenueBanner />

        <div className='flex flex-row gap-5'>
          <div className='xxl:w-[850px] bg-white border-2 border-cMono300 rounded-lg p-5'>
            <h3 className='font-bold text-2xl pb-4'>About us</h3>

            <div className='flex flex-col gap-2'>
              <p>Our four mashed-up crazy golf courses at our London venue will blow your mind!</p>
              <p>Groups of up to eight can book mini golf online, with some walk-up tickets available too, (first come first served).</p>
              <p>Want to add on extra people? Click the button below.</p>
              <p>If you love things loud and flashy, you’re in the right place. Our venues contain flashing lights, UV lights, and loud music.</p>
            </div>

            <h3 className='font-bold text-2xl py-4'>You'll love us because...</h3>

            <div className='flex flex-row justify-evenly'>
                <VenueHighlightsTablet />
            </div>
          </div>

          <div className='hidden xl:block'>
            <VenueAside />
          </div>
        </div>

      </div>
    </section>
  )
}

export default VenueMain;