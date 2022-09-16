import DashboardMain from "../Components/DashboardMain/DashboardMain";
import DashboardNav from "../Components/DashboardNav/DashboardNav";
import GroupNavSidebar from "../Components/GroupNavSidebar/GroupNavSidebar";


const Dashboard = () => {
  return (
    <section className="h-screen flex flex-col">
        <DashboardNav />

        <div className="flex flex-row h-full">
            <GroupNavSidebar />

            <div className="flex flex-col items-stretch h-full w-full">
              <DashboardMain />
            </div>
        </div>
    </section>
  )
}

export default Dashboard;