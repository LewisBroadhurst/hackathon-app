import NotificationBell from "../../Assets/notification-bell.png";
import Portrait from "../../Assets/PortraitSquared.jpg";

const Header = () => {
  return (
    <section className="fixed w-screen bg-cMono500 z-10 text-white">
        <div className="flex flex-row justify-between items-center py-1 text-cBlack500 w-[1200px] mx-auto">

            <div className="flex flex-row items-center gap-4">
                <h2 className="text-2xl">Five</h2>

                <div className="form-control text-black">
                    <div className="input-group input-group-sm">
                        <input type="text" placeholder="Search…" className="input input-bordered input-sm" />
                        <button className="btn btn-square btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            

            <div className="flex flex-row items-center gap-3">
                <div className="w-10 rounded-md p-2">
                    <img src={NotificationBell} alt="Notification Bell" />
                </div>
                <div className="w-10 rounded-md p-2">
                    <img src={NotificationBell} alt="Notification Bell" />
                </div>

                <div className="w-10 rounded-full">
                    <img src={Portrait} alt="" className="rounded-full"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header;