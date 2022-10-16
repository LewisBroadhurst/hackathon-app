import EventMain from "../Components/EventSpecific/EventMain";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const EventPage = () => {
  return (
    <section className="h-screen flex flex-col">
        <Header />

        <div className="flex flex-row">
          <div className="flex fixed h-screen p-1">

          </div>
            
          <div className="flex flex-col items-stretch w-full">
            <EventMain />
          </div>
        </div>

        <Footer />
    </section>
  )
}

export default EventPage;