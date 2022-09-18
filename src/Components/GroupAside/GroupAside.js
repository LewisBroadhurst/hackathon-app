import GroupOverviewEventCard from "../GroupOverviewEventCard/GroupOverviewEventCard";

const GroupAside = () => {
  return (
    <section>
        <div className="flex flex-col gap-6 w-full border-2 border-cMono200 bg-cMono100 rounded-md h-min p-2">
            <div className="rounded-md p-3">
                <h3 className="text-xl pb-2 text-center">Promoted Venues</h3>

                <div className="flex flex-row md:flex-col w-full">
                    <GroupOverviewEventCard />

                    <GroupOverviewEventCard />
                </div>
            </div>
        </div>
    </section>
  )
}

export default GroupAside;