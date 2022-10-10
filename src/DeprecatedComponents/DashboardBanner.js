// import { NavLink } from "react-router-dom";

// const DashboardBanner = ({mainDisplay, setTab}) => {

//   const handleHomeClick = (event) => {
//     event.preventDefault();

//     return setTab(0);
//   }

//   const handleEventClick = (event) => {
//     event.preventDefault();

//     return setTab(1);
//   }

//   const handlePollsClick = (event) => {
//     event.preventDefault();

//     return setTab(2);
//   }

//   const handleVenuesClick = (event) => {
//     event.preventDefault();

//     return setTab(3);
//   }

//   return (
//     <section className="border-b border-cMono500 pb-5">
//         <div className="text-cMono800 flex flex-col items-center">
//             <span className="text-md">Dashboard</span>

//             <h2 className="text-4xl">Recent Activity</h2>

//             <nav className="mt-4">
//                 <ul className="flex flex-row items-center flex-wrap gap-2 content-around text-md text-cMono100 md:text-lg">
                  
//                   <li onClick={handleHomeClick} className="text-cMono100 bg-cBlue200 py-1 px-3 rounded-md">Home
//                   </li>
//                   <li onClick={handleEventClick} className="text-cMono100 bg-cBlue200 py-1 px-3 rounded-md">Events</li>
//                   <li onClick={handlePollsClick} className="text-cMono100 bg-cBlue200 py-1 px-3 rounded-md">Polls</li>
//                   <li onClick={handleVenuesClick} className="text-cMono100 bg-cBlue200 py-1 px-3 rounded-md">Venues</li>
//                 </ul>
//             </nav>
//         </div>
//     </section>
//   )
// }

// export default DashboardBanner;