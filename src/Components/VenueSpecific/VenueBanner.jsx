import React from 'react';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VenueCarousel from './VenueCarousel';

const VenueBanner = () => {
  return (
    <section className='flex flex-col gap-4 justify-between items-center pb-6 border-b border-neutral mb-5 lg:flex-row'>
      <section className='flex flex-col items-start gap-2'>
        <div className='flex flex-col items-start gap-2'>
          <h1 className='text-3xl xl:text-4xl font-bold'>Five Star Bowling Alley</h1>

          <div className='flex flex-row gap-2 text-sm xl:text-lg'>
              <span><FontAwesomeIcon icon={faLocationDot}/></span>
              <span>123 Bowling Alley Lane, L12 DON, London</span>
          </div>
        </div>

        <div className='flex gap-2 self-start'>
            <div className="badge badge-secondary">Active</div>
            <div className="badge badge-secondary">Games</div>
            <div className="badge badge-secondary">Food & Drink</div>
        </div>
      </section>

      <section className='w-5/6 lg:w-[500px]'>
        <VenueCarousel />
      </section>
    </section>
  )
}

export default VenueBanner;