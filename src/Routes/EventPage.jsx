import EventMain from "../Components/EventSpecific/EventMain";
import EventBanner from "../Components/EventSpecific/EventBanner";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import PromoVenueTablet from '../Components/Tablets/PromoVenueTablet';
import EventTablet from '../Components/Tablets/EventTablet';

const EventPage = () => {
  return (
    <section className="flex flex-col bg-base-200">
        <Header />

        <div className="xl:w-[1200px] mx-auto mt-12">
          <EventBanner />
        </div>

        <div className="flex flex-col px-5 gap-2 my-6 mx-auto lg:flex-row xl:w-[1200px]">
            
          <div className="xl:w-[900px]">
            <EventMain />
          </div>

          <div className='hidden lg:block xl:w-[300px]'>
            <PromoVenueTablet />
          </div>
        </div>

        <Footer />
    </section>
  )
}

export default EventPage;