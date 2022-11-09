import React, {useState, useEffect} from 'react';
import { getAllVenues } from '../../API/VenueAPI';
import PromoVenueCard from '../VenueCards/PromoVenueCard';

const PromoVenueTablet = () => {

  const [venues, setVenues] = useState(null);

  useEffect(() => {
    const response = async () => {
        let res = await getAllVenues(setVenues);
        setVenues(res);
    }
     
    response();
}, [])

  const content = () => {
    if (!venues) {
      return 'loading...'
    }

    return (
      <section className='flex flex-col gap-2 customShadow1 bg-white rounded-md p-2 px-4 pb-4'>

        <h3 className="text-md font-bold border-b text-center text-cMono800">Promoted Venues</h3>

        <div className="flex flex-col items-center justify-center gap-4">

        {
          !venues ? 'Loading...' : venues.slice(0, 2).map((venue, index) => {
            return (
              <PromoVenueCard key={index} />
            )
          })
        }
              
        </div>

      </section>
    )
  }

  return (
    <>
      {
      content()
      }
    </>
  )
}

export default PromoVenueTablet;