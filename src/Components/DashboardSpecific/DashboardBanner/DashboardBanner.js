import { NavLink } from "react-router-dom";

const DashboardBanner = () => {
  return (
    <section className="border-b border-cMono500 pb-5">
        <div className="text-cMono800 flex flex-col items-center">
            <span className="text-md">Dashboard</span>

            <h2 className="text-4xl">Recent Activity</h2>

            <nav className="mt-4">
                <ul className="flex flex-row items-center flex-wrap gap-2 content-around text-md text-cMono100 md:text-lg">
                    <li className="px-2 py-1 bg-cBlue500 rounded-lg">Home</li>
                    <li className="px-2 py-1 bg-cBlue500 rounded-lg">Events</li>
                    <li className="px-2 py-1 bg-cBlue500 rounded-lg">Polls</li>
                    {/* <li className="px-2 py-1 bg-cBlue500 rounded-lg">
                      <NavLink to={"/dashboard/polls"} style={({ isActive }) => ({
                        color: isActive ? '#fff' : '#545e6f',
                        background: isActive ? '#7600dc' : '#f0f0f0',
                        })}>Polls</NavLink>
                    </li> */}
                    <li className="px-2 py-1 bg-cBlue500 rounded-lg">Venues</li>
                </ul>
            </nav>
        </div>
    </section>
  )
}

export default DashboardBanner;