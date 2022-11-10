import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import VenueCarousel from '../VenueSpecific/VenueCarousel';

const defaultActiveTab = {
  'Overview': 'tab-active',
  'Polls': '',
  'Venues': '',
  'Members': ''
}

const EventBanner = ({eventName, org, starts, eventType, setTabContents}) => {

  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const handleTabChange = (event) => {
    event.preventDefault();
    console.log(event.target.getAttribute('name'));
    const clickedTab = event.target.getAttribute('name');

    Object.keys(activeTab).forEach((key) => {
      setActiveTab(activeTab[key] = '');
    });

    setActiveTab( {...activeTab, [clickedTab]: 'tab-active'} );

    return setTabContents(clickedTab);
  }

  const timeTag = () => {
    if (starts.slice(11, 13) & starts.slice(11, 13) > 12) {
      return 'pm'
    }

    if (starts.slice(11,13)) {
      return 'am'
    }
  }
  

  return (
    <section className='flex flex-col gap-2 justify-between items-center py-6 border-b xl:flex-row'>
      <section className="flex flex-col items-center text-center gap-2 xl:items-start xl:text-start">
        <span className="text-md text-neutral">{org.name}</span>

        <h1 className="text-4xl text-neutral-focus">{eventName}</h1>

        <div className='flex gap-2'>
          <span><FontAwesomeIcon icon={faCalendar} /></span>
          <span className='text-neutral'>{starts.slice(0, 10)}, {starts.slice(11, 16)} {timeTag()}</span>
        </div>

        <div className="tabs tabs-boxed flex gap-2 mt-4">
          <span className={`tab ${activeTab.Overview}`} onClick={handleTabChange} name='Overview'>Overview</span>
          <span className={`tab ${activeTab.Polls}`} onClick={handleTabChange} name='Polls'>Polls</span>
          <span className={`tab ${activeTab.Venues}`} onClick={handleTabChange} name='Venues'>Venues</span>
          <span className={`tab ${activeTab.Members}` } onClick={handleTabChange} name='Members'>Members</span>
        </div>
      </section>

      <div className='w-5/6 xl:w-[500px]'>
        <VenueCarousel />
      </div>
    </section>
  )
}

export default EventBanner;