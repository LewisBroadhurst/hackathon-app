import React from 'react'
import CommunityPost from '../../CommunityPost/CommunityPost';

const GroupCommunity = () => {
  return (
    <section className="p-4 border-2 border-cMono200 bg-cMono100 rounded-md">
        <div className="mb-4">
            <h2 className="text-2xl">Details</h2>
            <p className="mt-2">Welcome to the BNTA socials group! This quarter will be run by Oliver, Aaron, Michelle, and Hasmeet. We usually try to organise our socials to occur on the last friday of each month, so please remember to vote early so your voice can be heard!</p>
        </div>

        <div>
            <h2 className="text-2xl">Community Posts</h2>

            <CommunityPost />

            <CommunityPost />

            <CommunityPost />
        </div>
    </section>
  )
}

export default GroupCommunity;