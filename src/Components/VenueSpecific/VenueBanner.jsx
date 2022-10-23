import React from 'react';
import { faDoorOpen, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VenueCarousel from './VenueCarousel';

const VenueBanner = () => {
  return (
    <section className='mb-6 border-b-2 border-cMono800 flex flex-row justify-between'>
      <section className='py-6 flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-5xl font-bold'>Five Star Bowling Alley</h1>
          <div className='flex flex-row gap-4'>
              <span><FontAwesomeIcon icon={faLocationDot}/></span>
              <span>123 Bowling Alley Lane, L12 DON, London</span>
          </div>
        </div>

        {/* <div className='flex flex-row gap-4 text-xl'>
            <span><FontAwesomeIcon icon={faDoorOpen}/></span>
            <span>Come inside!</span>
        </div> */}

        <div className='flex gap-2'>
            <div className="badge badge-secondary">Active</div>
            <div className="badge badge-secondary">Games</div>
            <div className="badge badge-secondary">Food & Drink</div>
        </div>
      </section>

      <section className='w-[500px] flex flex-col justify-center items-center'>
        <VenueCarousel />
      </section>
    </section>
  )
}

export default VenueBanner;