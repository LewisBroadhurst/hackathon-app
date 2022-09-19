import DashboardMain from "../../Components/DashboardMain/DashboardMain";
import DashboardNav from "../../Components/DashboardNav/DashboardNav";
import GroupNavSidebar from "../../Components/GroupNavSidebar/GroupNavSidebar";

const DashBoard = () => {
  return (
    <section className="h-screen flex flex-col">
        <DashboardNav />

        <div className="flex flex-row">
          <div className="flex fixed h-screen p-1">
            <GroupNavSidebar />
          </div>
            
          <div className="flex flex-col items-stretch w-full">
            <DashboardMain />
          </div>
        </div>
    </section>
  )
}

export default DashBoard;