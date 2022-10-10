import { useState } from "react"

const defaultActiveTab = {
  'Overview': 'tab-active',
  'Events': '',
  'Polls': '',
  'Venues': '',
}


const GroupBanner = () => {

  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const handleTabChange = (event) => {
    event.preventDefault();
    console.log(event.target.getAttribute('name'));
    const clickedTab = event.target.getAttribute('name');

    Object.keys(activeTab).forEach((key) => {
      setActiveTab(activeTab[key] = '');
    });

    setActiveTab( {...activeTab, [clickedTab]: 'tab-active'} );
  }
        

  return (
    <section className="py-6 border-b border-cMono800 flex flex-row gap-5">

      <div className="w-[700px] mx-auto flex flex-col items-center">
        <h1 className="text-4xl mb-1 text-center sm:text-left md:text-5xl">Bright Network Socials</h1>

        <span className="md:pl-1">Next event: 12th October '22</span>

        {/* <nav className="mt-4">
            <ul className="flex flex-row items-center flex-wrap gap-2 content-around text-xs sm:text-md md:text-lg">
                <li className="px-2 py-1 bg-cMono200 rounded-lg">Overview</li>
                <li className="px-2 py-1 bg-cMono200 rounded-lg">Events</li>
                <li className="px-2 py-1 bg-cMono200 rounded-lg">Polls</li>
                <li className="px-2 py-1 bg-cMono200 rounded-lg">Venues</li>
                <li className="px-2 py-1 bg-cMono200 rounded-lg">Members</li>
            </ul>
        </nav> */}

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