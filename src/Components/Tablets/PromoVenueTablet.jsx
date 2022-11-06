import React from 'react';
import PromoVenueCard from '../VenueCards/PromoVenueCard';

const PromoVenueTablet = () => {
  return (
    <section className='flex flex-col gap-2 customShadow1 bg-white rounded-md p-2 px-4 pb-4'>

      <h3 className="text-md font-bold border-b text-center text-cMono800">Promoted Venues</h3>

      <div className="flex flex-col items-center justify-center gap-4">

        <PromoVenueCard />

        <PromoVenueCard />
            
      </div>

    </section>
  )
}

export default PromoVenueTablet;