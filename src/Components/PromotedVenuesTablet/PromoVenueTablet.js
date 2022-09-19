import GroupOverviewEventCard from "../EventCard/EventCard";

const PromoVenueTablet = () => {
  return (
    <section className="">
        <div className="flex flex-col gap-6 w-full border-2 border-cMono400 bg-white rounded-md h-min p-2">
            <div className="rounded-md p-3">
                <h3 className="text-xl pb-2 text-center text-cMono800">Promoted Venues</h3>

                <div className="flex flex-row md:flex-col w-full">
                    <GroupOverviewEventCard />

                    <GroupOverviewEventCard />
                </div>
            </div>
        </div>
    </section>
  )
}

export default PromoVenueTablet;