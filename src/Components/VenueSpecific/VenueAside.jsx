import React from 'react';
import GMapsComponent from '../GMaps/GMapsComponent';
import Bookings from './Bookings';

const VenueAside = () => {
  return (
    <section className='flex flex-col gap-2 w-[350px]'>
        <Bookings />

        <div className='h-96'>
            <GMapsComponent />
        </div>
    </section>
  )
}

export default VenueAside;