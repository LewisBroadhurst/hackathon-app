import DashboardMain from "../../Components/DashboardSpecific/DashboardMain/DashboardMain";
import Header from "../../Components/Header/Header";
import NavSidebar from "../../Components/NavSidebar/NavSidebar";

const DashBoard = () => {
  return (
    <section className="h-screen flex flex-col">
        <Header />

        <div className="flex flex-row">
          <div className="flex fixed h-screen p-1">
            <NavSidebar />
          </div>
            
          <div className="flex flex-col items-stretch w-full">
            <DashboardMain />
          </div>
        </div>
    </section>
  )
}

export default DashBoard;