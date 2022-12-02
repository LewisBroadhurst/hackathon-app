import React, {useState, useEffect} from 'react';
import CommunityPost from '../SocialPosts/CommunityPost';
import { useParams } from 'react-router-dom';
import { getEventByID } from '../../API/EventAPI';
import { getAllPosts } from '../../API/PostAPI';


const EventMain = () => {

  const [event, setEvent] = useState({});
  const [allPosts, setAllPosts] = useState([]);
  
  const { id } = useParams();
  
  useEffect(() => {
    const response = async () => {
        let org = await getEventByID(id);
        setEvent(org);

        let postsApi = await getAllPosts(setAllPosts);
        setAllPosts(postsApi);
    }
       
      response()
  }, [])


  const content = () => {
    if (!event) {
      return ''
    }

    return (
      <section>
        <section className="flex flex-col gap-2 rounded-md">
        {
            !allPosts ? '' : allPosts.map((post, index) => {
              const {content, likeCount, user} = post;
              console.log(post)
              return (
                <CommunityPost key={index} content={content} likecount={likeCount} user={user} />
              )
            })
          }
        </section>
      </section>
    )
  }

  return (
    <>
      {content()}
    </>
  )
}

export default EventMain;