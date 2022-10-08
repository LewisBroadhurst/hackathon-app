import PromoVenueTablet from "../../PromotedVenuesTablet/PromoVenueTablet";
import GroupBanner from "../GroupBanner/GroupBanner";
import GroupCommunity from "../GroupCommunity/GroupCommunity";
import EventTablet from "../../EventTablet/EventTablet";

const GroupMain = () => {
  return (
    <section className="bg-cMono300 flex flex-col text-cBlack500 mt-12">
        <div className="w-[1200px] mx-auto">

        <GroupBanner />

        <div className="flex flex-row gap-5 py-6">
            <div className="w-[350px]">
                <PromoVenueTablet />
            </div>

            <div className="w-[700px]">
                <GroupCommunity />
            </div>

            <div className="w-[350px]">
                <EventTablet />
            </div>  
        </div>

        </div>
    </section>
  )
}

export default GroupMain;