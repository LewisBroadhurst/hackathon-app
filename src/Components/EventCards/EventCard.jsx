import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({id, name, location, startdate}) => {

  const checkLength = () => {
    if (name.slice(19, 100)) {
      return '...'
    }
  }

  const content = () => {
    if (!name & !location & !startdate) {
      return 'loading...'
    }

    return (
    <Link to={`/event/${id}`}>
      <section className="flex flex-row justify-start items-center gap-4 py-2 px-1 w-full border-t border-cMono400 text-cMono600 hover:cursor-pointer hover:bg-base-200">
        <div className="w-16">
          <img className='rounded-md' src="https://placeimg.com/192/192/people" alt="" />
        </div>

        <div className="flex flex-col gap-0.5">
          <h2 className="text-md font-bold">{name ? name.slice(0, 18) + checkLength() : 'name'}</h2>

          <span className="text-xs">{location}</span>

          <div className="text-xs flex flex-row items-center gap-1">
            <span><FontAwesomeIcon icon={faCalendarAlt} /></span>
            <span>
              {
                startdate ? startdate.slice(0,10) : 'date'}, {startdate ? startdate.slice(11,16) : 'time'
              }
            </span>
            
          </div>

          <span className="text-xs">17 attendees</span>
        </div>
      </section>
    </Link>
    )
  }

  return (
    <>
      {content()}
    </>
  )
}

export default EventCard;