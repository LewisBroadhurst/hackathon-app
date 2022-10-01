import EventMain from "../Components/EventSpecific/EventMain";
import GroupBanner from "../Components/GroupOverviewSpecific/GroupBanner/GroupBanner";
import GroupMain from "../Components/GroupOverviewSpecific/GroupMain/GroupMain";
import Header from "../Components/Header/Header";
import NavSidebar from "../Components/NavSidebar/NavSidebar";

const EventPage = () => {
  return (
    <section className="h-screen flex flex-col">
        <Header />

        <div className="flex flex-row">
          <div className="flex fixed h-screen p-1">
            <NavSidebar />
          </div>
            
          <div className="flex flex-col items-stretch w-full">
            <EventMain />
          </div>
        </div>
    </section>
  )
}

export default EventPage;