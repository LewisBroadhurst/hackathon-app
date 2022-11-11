import React, {useState, useEffect} from 'react';
import PollPost from '../../SocialPosts/PollPost';
import {getAllEvents} from '../../../API/EventAPI';
import { useContext } from 'react';
import { UserContext } from '../../../Contexts/User.context';

const DashboardPolls = () => {

  const {user} = useContext(UserContext);
  const {polls} = user;

  return (
    <section>
      <div className="grid grid-cols-1 rounded-md"></div>
        {
          !polls ? 
          <div className='bg-white rounded-md text-center h-96 flex flex-col justify-center'>
            <span>No polls for you to complete!</span>
          </div> 
          : polls.map((poll, i) => {
            const {rsvp} = poll;
            const event = poll.event;
            const {pollStatus, location, startDateTime, votes, name, uniqueId} = event;
            return (
              <PollPost key={i} id={uniqueId} rsvp={rsvp} pollStatus={pollStatus} location={location} name={name} votes={votes} startdate={startDateTime} />
            )
          })
        }
    </section>
  )
}

export default DashboardPolls;