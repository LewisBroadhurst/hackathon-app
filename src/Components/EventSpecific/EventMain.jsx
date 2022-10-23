import React from 'react';
import PollPost from '../SocialPosts/PollPost';


const EventMain = () => {
  return (
    <section className="flex flex-col gap-2 rounded-md">
        <PollPost />

        <PollPost />

        <PollPost />

        <PollPost />
    </section>
  )
}

export default EventMain;