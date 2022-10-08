import React from 'react'
import CommunityPost from '../../CommunityPost/CommunityPost';

const GroupCommunity = () => {
  return (
    <section className="">
        <div className='flex flex-col gap-2'>
            <CommunityPost />

            <CommunityPost />

            <CommunityPost />
        </div>
    </section>
  )
}

export default GroupCommunity;