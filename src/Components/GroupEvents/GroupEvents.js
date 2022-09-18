import React from 'react'
import GroupOverviewEventCard from '../GroupOverviewEventCard/GroupOverviewEventCard'

const GroupEvents = () => {
  return (
    <section className="flex flex-col gap-4 w-full border-2 border-cMono200 bg-cMono100 rounded-md h-min p-2">
        <div className="rounded-md p-3">
            <h3 className="text-xl pb-2 text-center">Upcoming Events</h3>

            <div className="flex flex-col w-full">
                <GroupOverviewEventCard />

                <GroupOverviewEventCard />
            </div>
        </div>

        <div className="rounded-md p-3">
            <h3 className="text-xl pb-2 text-center">Successful Events</h3>

            <div className="flex flex-col w-full">
                <GroupOverviewEventCard />

                <GroupOverviewEventCard />
            </div>
        </div>
    </section>
  )
}

export default GroupEvents