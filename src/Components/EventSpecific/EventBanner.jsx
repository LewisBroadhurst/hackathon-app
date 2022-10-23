import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import VenueCarousel from '../VenueSpecific/VenueCarousel';

const EventBanner = () => {
  return (
    <section className='flex flex-row justify-between items-center py-6 border-b'>
      <section className="flex flex-col gap-2">
        <span className="text-md text-neutral">Bright Network Socials</span>

        <h1 className="text-4xl text-neutral-focus">September Quarterly</h1>

        <div className='flex gap-1'>
          <span><FontAwesomeIcon icon={faCalendar} /></span>
          <span className='text-neutral'>12th October '22</span>
        </div>

        <nav className="py-2">
            <ul className="flex flex-row items-center flex-wrap gap-2 content-around text-xs sm:text-md md:text-lg">
                <li className="px-2 py-1 bg-cMono200 rounded-lg">Overview</li>
                <li className="px-2 py-1 bg-cMono200 rounded-lg">Events</li>
                <li className="px-2 py-1 bg-cMono200 rounded-lg">Polls</li>
                <li className="px-2 py-1 bg-cMono200 rounded-lg">Venues</li>
                <li className="px-2 py-1 bg-cMono200 rounded-lg">Members</li>
            </ul>
        </nav>
      </section>
      <div className='w-[500px]'>
        <VenueCarousel />
      </div>
    </section>
  )
}

export default EventBanner;