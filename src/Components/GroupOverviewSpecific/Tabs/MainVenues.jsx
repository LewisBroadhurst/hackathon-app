import { getAllByAltText } from '@testing-library/react';
import React, {useState, useEffect} from 'react';
import { getAllVenues } from '../../../API/VenueAPI';
import CommunityPost from '../../SocialPosts/CommunityPost';
import PollPost from '../../SocialPosts/PollPost';

const DashboardVenues = () => {

  const [venues, setVenues] = useState(null);

  useEffect(() => {
    const response = async () => {
        let res = await getAllVenues(setVenues);
        setVenues(res);
        console.log(res)
    }
     
    response();
}, [])

  return (
    <section className="flex flex-col gap-2 rounded-md">
      {
        !venues ? '' : venues.map((venue, index) => {
          const {location, name, type} = venue;
          console.log(type)
          console.log(name);
          return (
            <div key={index}>
              <span>{name} -</span>
              <span>- {location} -</span>
              <span>- {type.niceName}</span>
            </div>
          )
        })
      }
    </section>
  )
}

export default DashboardVenues;