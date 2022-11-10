import EventMain from "../Components/EventSpecific/EventMain";
import EventBanner from "../Components/EventSpecific/EventBanner";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import PromoVenueTablet from '../Components/Tablets/PromoVenueTablet';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getEventByID } from '../API/EventAPI';

const EventPage = () => {

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

    const {uniqueId, name, location, eventType, startDateTime, organisation} = event;

    
    return (
      <section className="flex flex-col bg-base-200">
        <Header />

        <div className="xl:w-[1200px] mx-auto mt-12">
          <EventBanner eventName={name} org={organisation} starts={startDateTime} eventType={eventType} />
        </div>

        <div className="flex flex-col px-5 gap-2 my-6 mx-auto lg:flex-row xl:w-[1200px]">
            
          <div className="xl:w-[900px]">
            <EventMain />
          </div>

          <div className='hidden lg:block xl:w-[300px]'>
            <PromoVenueTablet />
          </div>
        </div>

        <Footer />
    </section>
    )
  }

  return (
    <>
      {content()}
    </>
  )
}

export default EventPage;