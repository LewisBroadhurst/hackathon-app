import GroupMain from "../Components/GroupOverviewSpecific/GroupMain";
import Header from "../Components/Header/Header";
import Footer from '../Components/Footer/Footer';


const GroupOverview = () => {
  return (
    <section className="h-screen flex flex-col">
      <Header />

      <div className="flex flex-row">
        
        <div className="flex flex-col items-stretch w-full">
          <GroupMain />
        </div>

      </div>

      <Footer />
    </section>
  )
}

export default GroupOverview;