import React from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import VenueMain from '../Components/VenueSpecific/VenueMain';

const Venue = () => {
  return (
    <section className='flex flex-col bg-cMono200'>
        <div>
            <Header />

            <div className=''>
                <VenueMain />
            </div>

            <Footer />
        </div>
    </section>
  )
}

export default Venue;