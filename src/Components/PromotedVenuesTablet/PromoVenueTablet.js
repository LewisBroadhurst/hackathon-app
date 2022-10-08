import GroupOverviewEventCard from "../EventCard/EventCard";

const PromoVenueTablet = () => {
  return (
    <section className="">
        <div className="flex flex-col gap-6 w-full border-2 border-cMono400 bg-white rounded-md h-min">

            <div className="rounded-md p-2 px-4">
                <h3 className="text-md font-bold pb-1 text-center text-cMono800">Promoted Venues</h3>

                <div className="flex flex-col w-full">
                    <GroupOverviewEventCard />

                    <GroupOverviewEventCard />
                </div>
            </div>

        </div>
    </section>
  )
}

export default PromoVenueTablet;