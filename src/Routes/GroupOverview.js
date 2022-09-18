import GroupMain from "../Components/GroupMain/GroupMain";
import DashboardNav from "../Components/DashboardNav/DashboardNav";
import GroupNavSidebar from "../Components/GroupNavSidebar/GroupNavSidebar";


const GroupOverview = () => {
  return (
    <section className="h-screen flex flex-col">
        <DashboardNav />

        <div className="flex flex-row">
          <div className="flex fixed h-screen">
            <GroupNavSidebar />
          </div>
            
          <div className="flex flex-col items-stretch w-full">
            <GroupMain />
          </div>
        </div>
    </section>
  )
}

export default GroupOverview;