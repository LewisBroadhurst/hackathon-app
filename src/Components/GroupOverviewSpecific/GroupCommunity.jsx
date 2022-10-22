import React from 'react'
import CommunityPost from '../SocialPosts/CommunityPost';
import PollPost from '../SocialPosts/PollPost';

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