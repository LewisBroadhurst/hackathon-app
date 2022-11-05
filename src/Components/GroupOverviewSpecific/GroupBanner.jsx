import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../Contexts/User.context';

const defaultActiveTab = {
  'Overview': 'tab-active',
  'Events': '',
  'Polls': '',
  'Venues': '',
}


const GroupBanner = ({setTabContents}) => {

  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const {user} = useContext(UserContext);

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
        

  return (
    <section className="py-6 border-b border-cMono800 flex flex-row gap-5">

      <div className="w-[700px] mx-auto flex flex-col items-center">
        <h1 className="text-4xl mb-1 text-center sm:text-left md:text-5xl">Bright Network Socials</h1>

        <span className="md:pl-1">Next event: 12th October '22</span>

        <span>{user.email}</span>

        <div className="tabs tabs-boxed flex gap-2 mt-4">
          <span className={`tab ${activeTab.Overview}`} onClick={handleTabChange} name='Overview'>Overview</span>
          <span className={`tab ${activeTab.Events}` } onClick={handleTabChange} name='Events'>Events</span>
          <span className={`tab ${activeTab.Polls}`} onClick={handleTabChange} name='Polls'>Polls</span>
          <span className={`tab ${activeTab.Venues}`} onClick={handleTabChange} name='Venues'>Venues</span>
        </div>
      </div>

    </section>
  )
}

export default GroupBanner;