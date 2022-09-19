import PromoVenueTablet from "../../PromotedVenuesTablet/PromoVenueTablet";
import GroupBanner from "../GroupBanner/GroupBanner";
import GroupCommunity from "../GroupCommunity/GroupCommunity";
import EventTablet from "../../EventTablet/EventTablet";

const GroupMain = () => {
  return (
    <section className="m-5 my-20 flex flex-col text-cBlack500 md:ml-24 md:mt-28">

        <GroupBanner />

        <div className="flex flex-col grid-cols-7 gap-5 justify-around mt-6 md:grid lg:flex-row">
            <div className="col-start-1 col-end-3 xl:col-start-2">
                <PromoVenueTablet />
            </div>

            <div className="col-start-3 col-end-6">
                <GroupCommunity />
            </div>

            <div className="col-start-6 col-end-8 xl:col-end-7">
                <EventTablet />
            </div>  
        </div>

    </section>
  )
}

export default GroupMain;