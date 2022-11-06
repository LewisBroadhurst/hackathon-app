import React from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import VenueMain from '../Components/VenueSpecific/VenueMain';

const Venue = () => {
  return (
    <section className='flex flex-col bg-cMono200'>
        <div>
            <Header />

            <div className='p-5 xl:w-[1200px] mx-auto lg:w-[1000px]'>
                <VenueMain />
            </div>

            <Footer />
        </div>
    </section>
  )
}

export default Venue;