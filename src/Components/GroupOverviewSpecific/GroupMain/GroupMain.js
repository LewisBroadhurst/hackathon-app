import PromoVenueTablet from "../../PromotedVenuesTablet/PromoVenueTablet";
import GroupBanner from "../GroupBanner/GroupBanner";
import GroupCommunity from "../GroupCommunity/GroupCommunity";
import EventTablet from "../../EventTablet/EventTablet";
import GroupDetailsTablet from "../../GroupDetailsTablet/GroupDetailsTablet";
import GroupMembersCard from "../GroupMembersCard/GroupMembersCard";
import { faPlus, faPen, faImage, faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GroupMain = () => {
  return (
    <section className="bg-cMono300 flex flex-col text-cBlack500 mt-12">
        <div className="w-[1200px] mx-auto">

        <GroupBanner />

        <div className="flex flex-row gap-4 py-6">
            <div className="w-[350px] flex flex-col gap-3">
                <GroupDetailsTablet />
                <PromoVenueTablet />
            </div>

            <div className="w-[700px]">
                <GroupCommunity />
            </div>

            <div className="w-[350px] flex flex-col gap-2">
                <GroupMembersCard />
                <EventTablet />
            </div>  
        </div>

        </div>

        

        <div className="fixed right-4 bottom-4 dropdown dropdown-top dropdown-end">
        <label tabIndex={0} className="">
            <div className="fixed right-4 bottom-4">
                <button className="btn btn-circle btn-md text-2xl bg-primary">
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </label>
        <ul tabIndex={0} className="dropdown-content mb-16 flex flex-col gap-4">
            <li>
                <div className="">
                    <button className="btn btn-circle text-2xl bg-primary">
                        <FontAwesomeIcon icon={faPen} />
                    </button>
                </div>
            </li>
            <li>
                <div className="">
                    <button className="btn btn-circle text-2xl bg-primary">
                        <FontAwesomeIcon icon={faImage} />
                    </button>
                </div>
            </li>
            <li>
                <div className="">
                    <button className="btn btn-circle text-2xl bg-primary">
                        <FontAwesomeIcon icon={faSquarePollVertical} />
                    </button>
                </div>
            </li>
        </ul>
        </div>
    </section>
  )
}

export default GroupMain;