import VenueBanner from "../Components/VenueSpecific/VenueBanner";
import Header from "../Components/Header/Header";

const VenuePage = () => {
  return (
    <section className="flex flex-col">
        <Header />
        <div className="flex flex-row">
            <VenueBanner />
        </div>
    </section>
  )
}

export default VenuePage;