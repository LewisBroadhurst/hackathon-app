import GroupMain from "../Components/GroupOverviewSpecific/GroupMain/GroupMain";
import Header from "../Components/Header/Header";
import NavSidebar from "../Components/NavSidebar/NavSidebar";


const GroupOverview = () => {
  return (
    <section className="h-screen flex flex-col">
        <Header />

        <div className="flex flex-row">
          <div className="flex fixed h-screen p-1">
            <NavSidebar />
          </div>
            
          <div className="flex flex-col items-stretch w-full">
            <GroupMain />
          </div>
        </div>
    </section>
  )
}

export default GroupOverview;