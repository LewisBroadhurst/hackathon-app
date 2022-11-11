import React, {useState, useEffect} from 'react';
import { getAllVenues } from '../../../API/VenueAPI';
import LandscapeVenueCard from '../../VenueCards/LandscapeVenueCard';

const DashboardVenues = () => {

  const [venues, setVenues] = useState(null);

  useEffect(() => {
    const response = async () => {
        let res = await getAllVenues(setVenues);
        setVenues(res);
    }
     
    response();
}, [])

  return (
    <section className="flex flex-col gap-2 rounded-md">
      {
        !venues ? '' : venues.map((venue, index) => {
          const {location, name, uniqueId, type} = venue;
          return (
            <LandscapeVenueCard key={index} id={uniqueId} name={name} location={location} type={type}/>
          )
        })
      }
    </section>
  )
}

export default DashboardVenues;