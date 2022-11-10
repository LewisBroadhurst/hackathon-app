import React, {useState, useEffect} from 'react';
import PollPost from '../../SocialPosts/PollPost';
import {getAllEvents} from '../../../API/EventAPI';
import { useContext } from 'react';
import { UserContext } from '../../../Contexts/User.context';

const DashboardPolls = () => {

  const [events, setEvents] = useState(null);
  const {user} = useContext(UserContext);

  useEffect(() => {
    const response = async () => {
        let res = await getAllEvents(setEvents);
        setEvents(res);
    }
     
    response();
  }, [])


  return (
    <section>
      <div className="grid grid-cols-1 rounded-md"></div>
        {
          !events ? 'loading...' : events.map((poll, i) => {
            const {location, startDateTime, votes, name, uniqueId} = poll;
            return (
              <PollPost key={i} id={uniqueId} location={location} name={name} votes={votes} startdate={startDateTime} />
            )
          })
        }
    </section>
  )
}

export default DashboardPolls;