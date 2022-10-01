import VenueBanner from "../Components/VenueSpecific/VenueBanner";
import Header from "../Components/Header/Header";
import GroupNavSidebar from "../Components/NavSidebar/NavSidebar";

const VenuePage = () => {
  return (
    <section className="flex flex-col">
        <Header />
        <div className="flex flex-row">
            <GroupNavSidebar />
            <VenueBanner />
        </div>
    </section>
  )
}

export default VenuePage;