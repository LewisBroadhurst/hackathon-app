import GroupMain from "../Components/GroupOverviewSpecific/GroupMain";
import Header from "../Components/Header/Header";


const GroupOverview = () => {
  return (
    <section className="h-screen flex flex-col">
        <Header />

        <div className="flex flex-row">
          
          <div className="flex flex-col items-stretch w-full">
            <GroupMain />
          </div>

        </div>
    </section>
  )
}

export default GroupOverview;