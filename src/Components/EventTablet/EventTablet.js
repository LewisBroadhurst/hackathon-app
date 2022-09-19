import React from 'react'
import GroupOverviewEventCard from '../EventCard/EventCard'

const EventTablet = () => {
  return (
    <section className="flex flex-row justify-around gap-4 w-full rounded-md h-min md:flex-col">
        <div className="rounded-md p-3 border-2 border-cMono400 bg-white">
            <h3 className="text-xl pb-2 text-center">Upcoming Events</h3>

            <div className="flex flex-col w-full">
                <GroupOverviewEventCard />

                <GroupOverviewEventCard />
            </div>
        </div>

        <div className="rounded-md p-3 border-2 border-cMono400 bg-white">
            <h3 className="text-xl pb-2 text-center">Successful Events</h3>

            <div className="flex flex-col w-full">
                <GroupOverviewEventCard />

                <GroupOverviewEventCard />
            </div>
        </div>
    </section>
  )
}

export default EventTablet;