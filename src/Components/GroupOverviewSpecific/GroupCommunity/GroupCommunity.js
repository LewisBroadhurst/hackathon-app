import React from 'react'
import CommunityPost from '../../CommunityPost/CommunityPost';

const GroupCommunity = () => {
  return (
    <section className="p-4 border-2 border-cMono200 bg-cMono100 rounded-md">
      
        <div>
            <h2 className="text-2xl">Recent Activity</h2>

            <CommunityPost />

            <CommunityPost />

            <CommunityPost />
        </div>
    </section>
  )
}

export default GroupCommunity;