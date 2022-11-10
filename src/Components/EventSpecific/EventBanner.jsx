import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import VenueCarousel from '../VenueSpecific/VenueCarousel';

const EventBanner = ({eventName, org, starts, eventType}) => {

  const timeTag = () => {
    if (starts.slice(11, 13) & starts.slice(11, 13) > 12) {
      return 'pm'
    }

    if (starts.slice(11,13)) {
      return 'am'
    }
  }
  

  return (
    <section className='flex flex-col gap-2 justify-between items-center py-6 border-b xl:flex-row'>
      <section className="flex flex-col items-center text-center gap-2 xl:items-start xl:text-start">
        <span className="text-md text-neutral">{org.name}</span>

        <h1 className="text-4xl text-neutral-focus">{eventName}</h1>

        <div className='flex gap-2'>
          <span><FontAwesomeIcon icon={faCalendar} /></span>
          <span className='text-neutral'>{starts.slice(0, 10)}, {starts.slice(11, 16)} {timeTag()}</span>
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

      <div className='w-5/6 xl:w-[500px]'>
        <VenueCarousel />
      </div>
    </section>
  )
}

export default EventBanner;