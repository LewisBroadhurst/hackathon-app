import React from 'react'
import CommunityPost from '../Posts/CommunityPost';
import PollPost from '../Posts/PollPost';

const GroupCommunity = () => {
  return (
    <section className="">
        <div className='flex flex-col gap-2'>
            <CommunityPost />

            <PollPost />

            <CommunityPost />

            <CommunityPost />

            <PollPost />
        </div>
    </section>
  )
}

export default GroupCommunity;