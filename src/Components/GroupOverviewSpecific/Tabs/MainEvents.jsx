import React, {useState, useEffect} from 'react';
import { getAllEvents } from '../../../API/EventAPI';
import CommunityPost from '../../SocialPosts/CommunityPost';
import PollPost from '../../SocialPosts/PollPost';
import LandscapeEventCard from '../../EventCards/LandscapeEventCard';

const DashboardEvents = () => {

  const [events, setEvents] = useState(null);

  useEffect(() => {
    const response = async () => {
        let res = await getAllEvents(setEvents);
        setEvents(res);
        console.log(events)
    }
     
    response();
}, [])


  return (
    <section className="flex flex-col gap-2 rounded-md">
      {
        !events ? '' : events.filter(event => event.organisation.uniqueId === 1)
        .map((event, index) => {
          const {location, name, startDateTime, eventType} = event;
          console.log(name);
          return (
            <LandscapeEventCard key={index} name={name} location={location} starting={startDateTime} event={eventType}/>
          )
        })
      }
    </section>
  )
}

export default DashboardEvents;