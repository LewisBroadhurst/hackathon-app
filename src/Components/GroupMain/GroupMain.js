import CommunityPost from "../CommunityPost/CommunityPost";
import GroupOverviewEventCard from "../GroupOverviewEventCard/GroupOverviewEventCard";

const GroupMain = () => {
  return (
    <section className="m-5 flex flex-col text-cBlack500 md:ml-24 md:mt-28">

        <div className="pb-6 border-b border-cGrey400 flex flex-col items-center">

            <span className="text-md md:pl-1">Dashboard / Bright Network Socials</span>

            <h1 className="text-4xl mt-2 mb-1 text-center sm:text-left md:text-5xl">Bright Network Socials</h1>

            <span className="md:pl-1">Next event: 12th October '22</span>

            <nav className="mt-4">
                <ul className="flex flex-row items-center flex-wrap gap-2 content-around text-xs sm:text-md md:text-lg">
                    <li className="px-2 py-1 bg-cOrange300 rounded-lg">Overview</li>
                    <li className="px-2 py-1 bg-cOrange300 rounded-lg">Events</li>
                    <li className="px-2 py-1 bg-cOrange300 rounded-lg">Polls</li>
                    <li className="px-2 py-1 bg-cOrange300 rounded-lg">Venues</li>
                    <li className="px-2 py-1 bg-cOrange300 rounded-lg">Members</li>
                </ul>
            </nav>
        </div>

        <div className="grid grid-cols-7 gap-5 justify-around mt-6 lg:flex-row">

            <div className="col-start-3 col-end-6 p-4 pt-0 mb-2 lg:mr-4">
                <div className="mb-4">
                    <h2 className="text-2xl">Details</h2>
                    <p className="mt-2">Welcome to the BNTA socials group! This quarter will be run by Oliver, Aaron, Michelle, and Hasmeet. We usually try to organise our socials to occur on the last friday of each month, so please remember to vote early so your voice can be heard!</p>
                </div>

                <div>
                    <h2 className="text-2xl">Community Posts</h2>

                    <CommunityPost />

                    <CommunityPost />

                    <CommunityPost />
                </div>
            </div>

            <div className="col-start-6 col-end-7 flex flex-col gap-6 w-full">

                <div className="bg-cBlue100 rounded-md p-3">
                    <h3 className="text-xl pb-2 text-center border-b border-cMono300">Upcoming Events</h3>

                    <div className="flex flex-col w-full">
                        <GroupOverviewEventCard />

                        <GroupOverviewEventCard />
                    </div>
                </div>

                <div className="bg-cBlue100 rounded-md p-3">
                    <h3 className="text-xl pb-2 text-center border-b border-cMono300">Successful Events</h3>

                    <div className="flex flex-col w-full">
                        <GroupOverviewEventCard />

                        <GroupOverviewEventCard />
                    </div>
                </div>

            </div>
        </div>

    </section>
  )
}

export default GroupMain;