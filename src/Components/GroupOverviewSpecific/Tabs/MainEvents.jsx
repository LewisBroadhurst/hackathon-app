import React, {useState, useEffect} from 'react';
import { getAllEvents } from '../../../API/EventAPI';
import CommunityPost from '../../SocialPosts/CommunityPost';
import PollPost from '../../SocialPosts/PollPost';

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
        !events ? '' : events.map((event, index) => {
          const {location, name, startDateTime} = event;
          console.log(name);
          return (
            <div key={index}>
              <span>{name} -</span>
              <span>- {location} -</span>
              <span>- {startDateTime.slice(0, 10)} -</span>
              <span>- {startDateTime.slice(11, 16)}</span>
            </div>
          )
        })
      }
    </section>
  )
}

export default DashboardEvents;