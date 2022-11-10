import EventMain from "../Components/EventSpecific/EventMain";
import EventBanner from "../Components/EventSpecific/EventBanner";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import PromoVenueTablet from '../Components/Tablets/PromoVenueTablet';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getEventByID } from '../API/EventAPI';
import EventCommunity from "../Components/EventSpecific/EventCommunity";
import EventMembers from "../Components/EventSpecific/tabs/EventMembers";
import EventVenues from "../Components/EventSpecific/tabs/EventVenues";
import EventPolls from "../Components/EventSpecific/tabs/EventPolls";
import CreatePost from "../Components/Popups/CreatePost";

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

  const [tabContents, setTabContents] = useState('Overview');
  const mainDisplay = (tabContents) => {
    switch (tabContents) {
        case 'Overview':
            return <EventMain />
        case 'Members':
            return <EventMembers />
        case 'Polls':
            return <EventPolls />
        case 'Venues':
            return <EventVenues />
        default:
            return <EventMain />
    }
}

  const content = () => {
    if (!event) {
      return ''
    }

    const {uniqueId, name, location, eventType, startDateTime, organisation} = event;

    
    return (
      <section className="flex flex-col bg-slate-300">
        <Header />

        <div className="xl:w-[1200px] mx-auto mt-12">
          <EventBanner eventName={name} org={organisation} starts={startDateTime} eventType={eventType} setTabContents={setTabContents} />
        </div>

        <div className="flex flex-col px-5 gap-2 my-6 mx-auto lg:flex-row xl:w-[1200px]">
            
          <div className="xl:w-[900px]">
            {mainDisplay(tabContents)}
          </div>

          <div className='hidden lg:block xl:w-[300px]'>
            <PromoVenueTablet />
          </div>
        </div>

        <div className="fixed right-4 bottom-4 dropdown dropdown-top dropdown-end">
          <CreatePost />
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