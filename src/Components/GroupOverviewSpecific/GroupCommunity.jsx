import React, {useState, useEffect} from 'react'
import { getAllOrganisations } from '../../API/OrganisationAPI';
import { getAllPosts } from '../../API/PostAPI';
import CommunityPost from '../SocialPosts/CommunityPost';
import PollPost from '../SocialPosts/PollPost';

const GroupCommunity = () => {

  const [allPosts, setAllPosts] = useState(null);

  useEffect(() => {
    const response = async () => {
        let postsApi = await getAllPosts(setAllPosts);
        setAllPosts(postsApi);
    }
     
    response()
}, [])


  return (
    <section className="">
        <div className='flex flex-col gap-2'>
          {
            !allPosts ? '' : allPosts.map((post, index) => {
              const {content, likeCount, user} = post;
              console.log(post)
              return (
                <CommunityPost key={index} content={content} likecount={likeCount} user={user} />
              )
            })
          }
        </div>
    </section>
  )
}

export default GroupCommunity;