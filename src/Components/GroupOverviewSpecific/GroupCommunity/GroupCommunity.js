import React from 'react'
import CommunityPost from '../../CommunityPost/CommunityPost';
import PollPost from '../../PollPost/PollPost';

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