import DashboardBanner from '../DashboardBanner/DashboardBanner';
import PromoVenueTablet from '../../PromotedVenuesTablet/PromoVenueTablet';
import EventTablet from '../../EventTablet/EventTablet';
import DashboardHome from '../DashboardNav/DashboardHome';
import DashboardEvents from '../DashboardNav/DashboardEvents';
import { useState } from 'react';
import DashboardPolls from '../DashboardNav/DashboardPolls';
import DashboardVenues from '../DashboardNav/DashboardVenues';

const DashboardMain = ({tab, setTab}) => {

    const mainDisplay = (tab) => {
        switch (tab) {
            case 0:
                return <DashboardHome />
            case 1:
                return <DashboardEvents />
            case 2:
                return <DashboardPolls />
            case 3:
                return <DashboardVenues />
            default:
                return <DashboardHome />
        }
    };



  return (
    <section className="m-5 my-20 flex flex-col text-cBlack500 md:ml-24 md:mt-24">

        <DashboardBanner mainDisplay={mainDisplay} tab={tab} setTab={setTab} />

        <div className="grid grid-cols-1 gap-3 mt-6 md:grid-cols-9">
            <div className="md:col-start-3 md:col-end-8 lg:col-start-1 lg:col-end-3 xl:col-start-2 xl:col-end-4">
                <PromoVenueTablet />
            </div>

            <div className='flex flex-col bg-white rounded-md border-2 border-cMono400 md:col-start-3 md:col-end-8 xl:col-start-4 xl:col-end-7'>
                {mainDisplay(tab)}
            </div>

            <div className="md:col-start-3 md:col-end-8 lg:col-start-8 lg:col-end-10 xl:col-start-7 xl:col-end-9">
                <EventTablet />
            </div>  
        </div>

    </section>
  )
}

export default DashboardMain