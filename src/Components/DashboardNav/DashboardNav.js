import NotificationBell from "../../Assets/notification-bell.png";
import Portrait from "../../Assets/PortraitSquared.jpg";
import SearchMag from "../../Assets/SearchMag.png"

const DashboardNav = () => {
  return (
    <section className="bg-cBlue300">
        <div className="flex flex-row justify-between items-center mx-5 py-2 text-cBlack500">

            <div className="flex flex-row items-baseline">
                <h2 className="text-3xl mr-5">Five Star</h2>
                <span className="text-cGrey400 cursor-pointer border-cWhite100 hover:text-cWhite100 hover:border-b">Need event inspiration?</span>
            </div>
            

            <div className="flex flex-row items-center">

                <div className="mr-12 flex flex-row items-center">
                    <input type={"text"} placeholder={"Search"} className="rounded-md p-2" />
                    <button type="button" className="rounded-full bg-slate-500 w-7 h-7 -translate-x-3 flex justify-center items-center">
                        <img src={SearchMag} alt="" className="h-4 w-4"/>
                    </button>
                </div>

                <div className="w-10 bg-slate-400 rounded-full p-2 mr-6">
                    <img src={NotificationBell} alt="Notification Bell" />
                    <div className="bg-red-600 rounded-full w-6 h-6 translate-x-5 -translate-y-9 fixed flex justify-center">
                        <span className="text-white">1</span>
                    </div>
                </div>

                <div className="w-12 bg-slate-400 rounded-full">
                    <img src={Portrait} alt="" className="rounded-full"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DashboardNav;