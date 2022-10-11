import React from 'react';
import Header from '../Components/Header/Header';
import VenueMain from '../Components/VenueMain/VenueMain';

const Venue = () => {
  return (
    <section className='flex flex-col bg-cMono200'>
        <div>
            <Header />

            <div className=''>
                <VenueMain />
            </div>
        </div>
    </section>
  )
}

export default Venue;