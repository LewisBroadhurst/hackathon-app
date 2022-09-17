
const GroupMain = () => {
  return (
    <section className="m-5 flex flex-col text-cBlack500 lg:m-10">

        <div className="pb-6 border-b border-cGrey400 flex flex-col items-center sm:items-stretch">

            <span className="text-md md:pl-1">Dashboard / Bright Network Socials</span>

            <h1 className="text-4xl mt-2 mb-1 text-center sm:text-left md:text-5xl">Bright Network Socials</h1>

            <span className="md:pl-1">Next event: 12th October '22</span>

            <nav className="mt-4">
                <ul className="flex flex-row items-center flex-wrap gap-2 content-around text-xs sm:text-md md:text-lg">
                    <li className="px-2 py-1 bg-cOrange200 rounded-lg">Overview</li>
                    <li className="px-2 py-1 bg-cOrange200 rounded-lg">Events</li>
                    <li className="px-2 py-1 bg-cOrange200 rounded-lg">Polls</li>
                    <li className="px-2 py-1 bg-cOrange200 rounded-lg">Venues</li>
                    <li className="px-2 py-1 bg-cOrange200 rounded-lg">Members</li>
                </ul>
            </nav>
        </div>

        <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col p-4 mb-2 lg:w-2/3 lg:mr-4">
                <div className="mb-4">
                    <h2 className="text-2xl">Details</h2>
                    <p className="mt-2">Welcome to the BNTA socials group! This quarter will be run by Oliver, Aaron, Michelle, and Hasmeet. We usually try to organise our socials to occur on the last friday of each month, so please remember to vote early so your voice can be heard!</p>
                </div>

                <div>
                    <h2 className="text-2xl">Community Posts</h2>
                    <p className="mt-2">Remember to cast your vote for the upcoming September social! It's a close race between bowling and mini golf 🎳⛳</p>
                </div>
            </div>

            <div className="flex flex-col gap-6 md:flex-row lg:flex-col lg:w-1/3 lg:mt-6">
                <div className="bg-cOrange100 rounded-md py-4 px-6 md:w-1/2 lg:w-full">
                    <h3 className="text-2xl pb-2 lg:pb-4">Upcoming Events</h3>

                    <p className="pb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aliquid facere ratione iste minus pariatur? Nam aspernatur numquam laboriosam eaque impedit? Dolorum, asperiores? Laudantium nobis sequi quos commodi harum minus quod ipsam error modi doloribus.</p>

                    <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aliquid facere ratione iste minus pariatur? Nam aspernatur numquam laboriosam eaque impedit? Dolorum, asperiores? Laudantium nobis sequi quos commodi harum minus quod ipsam error modi doloribus.</p>
                </div>

                <div className="bg-cOrange100 rounded-md py-4 px-6 md:w-1/2 lg:w-full">
                    <h3 className="text-2xl pb-2 lg:pb-4">Upcoming Events</h3>

                    <p className="pb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aliquid facere ratione iste minus pariatur? Nam aspernatur numquam laboriosam eaque impedit? Dolorum, asperiores? Laudantium nobis sequi quos commodi harum minus quod ipsam error modi doloribus.</p>

                    <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aliquid facere ratione iste minus pariatur? Nam aspernatur numquam laboriosam eaque impedit? Dolorum, asperiores? Laudantium nobis sequi quos commodi harum minus quod ipsam error modi doloribus.</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default GroupMain;