import React, {useState, useEffect} from 'react';
import PollPost from '../SocialPosts/PollPost';
import { useParams } from 'react-router-dom';
import { getEventByID } from '../../API/EventAPI';
import CreatePost from "../Popups/CreatePost";


const EventMain = () => {

  const [event, setEvent] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
      const response = async () => {
          let org = await getEventByID(id);
          setEvent(org);
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
          <PollPost />

          <PollPost />

          <PollPost />

          <PollPost />
      </section>

      <div className="fixed right-4 bottom-4 dropdown dropdown-top dropdown-end">
        <CreatePost />
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

export default EventMain;