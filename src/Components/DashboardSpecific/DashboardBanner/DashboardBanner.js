import { NavLink } from "react-router-dom";

const DashboardBanner = ({mainDisplay, setTab}) => {

  const handleHomeClick = (event) => {
    event.preventDefault();

    return setTab(0);
  }

  const handleEventClick = (event) => {
    event.preventDefault();

    return setTab(1);
  }

  const handlePollsClick = (event) => {
    event.preventDefault();

    return setTab(2);
  }

  const handleVenuesClick = (event) => {
    event.preventDefault();

    return setTab(3);
  }

  return (
    <section className="border-b border-cMono500 pb-5">
        <div className="text-cMono800 flex flex-col items-center">
            <span className="text-md">Dashboard</span>

            <h2 className="text-4xl">Recent Activity</h2>

            <nav className="mt-4">
                <ul className="flex flex-row items-center flex-wrap gap-2 content-around text-md text-cMono100 md:text-lg">
                  <li>
                    <NavLink
                      to={"/dashboard/home"} 
                      onClick={handleHomeClick}
                      style={({isActive}) => ({
                      color: isActive ? '#fff' : '#545e6f',
                      background: isActive ? '#7600dc' : '#f0f0f0'
                    })}>Home</NavLink>
                  </li>
                    <NavLink
                      to={"/dashboard/events"}
                      onClick={handleEventClick}
                      style={({isActive}) => ({
                      color: isActive ? '#fff' : '#545e6f',
                      background: isActive ? '#7600dc' : '#f0f0f0'
                    })}>Events</NavLink>
                    
                    <NavLink
                      to={"/dashboard/polls"}
                      onClick={handlePollsClick}
                      style={({isActive}) => ({
                      color: isActive ? '#fff' : '#545e6f',
                      background: isActive ? '#7600dc' : '#f0f0f0'
                    })}>Polls</NavLink>
                    
                    <NavLink 
                      to={"/dashboard/venues"}
                      onClick={handleVenuesClick}
                      style={({isActive}) => ({
                      color: isActive ? '#fff' : '#545e6f',
                      background: isActive ? '#7600dc' : '#f0f0f0'
                    })}>Venues</NavLink>
                    
                </ul>
            </nav>
        </div>
    </section>
  )
}

export default DashboardBanner;