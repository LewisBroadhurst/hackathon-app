import CommunityPost from '../CommunityPost/CommunityPost';
import DashboardBanner from '../DashboardBanner/DashboardBanner';
import GroupAside from '../GroupAside/GroupAside';
import GroupEvents from '../GroupEvents/GroupEvents';
import PollPost from '../PollPost/PollPost';

const DashboardMain = () => {
  return (
    <section className="m-5 my-20 flex flex-col text-cBlack500 md:ml-24 md:mt-28">

        <DashboardBanner />

        <div className="grid grid-cols-1 gap-5 mt-6 md:grid-cols-9">
            <div className="md:col-start-3 md:col-end-8 lg:col-start-1 lg:col-end-3 xl:col-start-2 xl:col-end-4">
                <GroupAside />
            </div>

            <div className="flex flex-col gap-3 md:col-start-3 md:col-end-8 xl:col-start-4 xl:col-end-7">
                <PollPost />

                <CommunityPost />

                <CommunityPost />

                <CommunityPost />
            </div>

            <div className="md:col-start-3 md:col-end-8 lg:col-start-8 lg:col-end-10 xl:col-start-7 xl:col-end-9">
                <GroupEvents />
            </div>  
        </div>

    </section>
  )
}

export default DashboardMain