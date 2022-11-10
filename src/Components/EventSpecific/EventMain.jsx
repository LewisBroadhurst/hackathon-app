import React, {useState, useEffect} from 'react';
import PollPost from '../SocialPosts/PollPost';
import { useParams } from 'react-router-dom';
import { getEventByID } from '../../API/EventAPI';


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
      <section className="flex flex-col gap-2 rounded-md">
        <PollPost />

        <PollPost />

        <PollPost />

        <PollPost />
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