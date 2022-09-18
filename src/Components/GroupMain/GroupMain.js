import GroupAside from "../GroupAside/GroupAside";
import GroupBanner from "../GroupBanner/GroupBanner";
import GroupCommunity from "../GroupCommunity/GroupCommunity";
import GroupEvents from "../GroupEvents/GroupEvents";


const GroupMain = () => {
  return (
    <section className="m-5 flex flex-col text-cBlack500 md:ml-24 md:mt-28">

        <GroupBanner />

        <div className="grid grid-cols-7 gap-5 justify-around mt-6 lg:flex-row">
            <div className="col-start-2 col-end-3 ">
                <GroupAside />
            </div>

            <div className="col-start-3 col-end-6 ">
                <GroupCommunity />
            </div>

            <div className="col-start-6 col-end-7">
                <GroupEvents />
            </div>  
        </div>

    </section>
  )
}

export default GroupMain;