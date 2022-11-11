import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { getAllOrganisations } from '../../API/OrganisationAPI';
import { getAllPosts } from '../../API/PostAPI';
import { getAllUsers } from '../../API/UserAPI'
import CommunityPost from '../SocialPosts/CommunityPost';
import PollPost from '../SocialPosts/PollPost';

const GroupCommunity = () => {

  const [allUsers, setAllUsers] = useState(null);
  const {id} = useParams()

  useEffect(() => {
    const response = async () => {
        let usersApi = await getAllUsers(setAllUsers);
        setAllUsers(usersApi);
        console.log(allUsers)
    }
     
    response()
  }, [])

  const content = () => {
    if (!allUsers) {
      return 'loading...'
    }

    const filteredOrgsUsers = allUsers.filter(user => user.myPosts.length > 0);

    return (
      <section className="">
        <div className='flex flex-col gap-2'>
          {
            !filteredOrgsUsers ? '' : filteredOrgsUsers.map((user) => {
              const {myPosts, content, likecount, uniqueId} = user;

              return myPosts.map((post, i) => {
                return <CommunityPost key={i} content={content} likecount={likecount} id={uniqueId}  />
              })
            })
          }
        </div>
    </section>
    )
  }


  return (
    <>
      {content()}
    </>
  )
}

export default GroupCommunity;