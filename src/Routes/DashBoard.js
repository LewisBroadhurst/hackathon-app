import DashboardMain from "../Components/DashboardSpecific/DashboardMain/DashboardMain";
import Header from "../Components/Header/Header";

const DashBoard = ({tab, setTab}) => {
  return (
    <section className="flex flex-col bg-cMono300">
        <Header />

        <div className="flex flex-row">

          <div className="flex flex-col items-stretch w-full">
            <DashboardMain tab={tab} setTab={setTab} />
          </div>

        </div>
    </section>
  )
}

export default DashBoard;