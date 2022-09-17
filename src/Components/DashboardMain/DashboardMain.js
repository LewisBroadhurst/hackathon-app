
const DashboardMain = () => {
  return (
    <section className="m-5 flex flex-col items-stretch text-cBlack500 lg:m-10">

        <div className="pb-4 border-b border-cGrey400 flex flex-col">

            <span className="pl-1">Dashboard / Bright Network Socials</span>

            <h1 className="text-5xl pb-1 mt-2 mb-2">Bright Network Socials</h1>

            <span className="pl-1">Next event: 12th October '22</span>

            <nav className="mt-3 pl-1">
                <ul className="flex flex-row items-center">
                    <li className="mr-5 px-3 py-1 bg-cOrange200 rounded-lg">Overview</li>
                    <li className="mr-5 px-3 py-1 bg-cOrange200 rounded-lg">Events</li>
                    <li className="mr-5 px-3 py-1 bg-cOrange200 rounded-lg">Polls</li>
                    <li className="mr-5 px-3 py-1 bg-cOrange200 rounded-lg">Venues</li>
                    <li className="mr-5 px-3 py-1 bg-cOrange200 rounded-lg">Members</li>
                </ul>
            </nav>
        </div>

        <div className="mt-4 flex flex-col h-full lg:flex-row lg:justify-between">
            <div className="mr-4 p-3 lg:w-2/3">
                <div>
                    <h2 className="text-2xl">Details</h2>
                    <p className="mt-4 mb-6">Welcome to the BNTA socials group! This quarter will be run by Oliver, Aaron, Michelle, and Hasmeet. We usually try to organise our socials to occur on the last friday of each month, so please remember to vote early so your voice can be heard!</p>
                </div>

                <div>
                    <h2 className="text-2xl">Community Posts</h2>
                    <p className="mt-4 mb-6">Remember to cast your vote for the upcoming September social! It's a close race between bowling and mini golf 🎳⛳</p>
                </div>
            </div>

            <div className="ml-4 p-3 mx-auto flex flex-col md:flex-row lg:flex-col lg:w-1/3">
                <div className="py-5 px-8 mb-5 bg-cOrange100 rounded-md mr-2 md:w-1/2 lg:p-0 lg:w-full">
                    <h3 className="text-2xl pb-2 lg:pb-4">Upcoming Events</h3>

                    <p className="pb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aliquid facere ratione iste minus pariatur? Nam aspernatur numquam laboriosam eaque impedit? Dolorum, asperiores? Laudantium nobis sequi quos commodi harum minus quod ipsam error modi doloribus.</p>

                    <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aliquid facere ratione iste minus pariatur? Nam aspernatur numquam laboriosam eaque impedit? Dolorum, asperiores? Laudantium nobis sequi quos commodi harum minus quod ipsam error modi doloribus.</p>
                </div>

                <div className="py-5 px-8 bg-cOrange100 rounded-md mr-2 md:w-1/2 lg:p-0 lg:w-full">
                    <h3 className="text-2xl pb-2 lg:pb-4">Upcoming Events</h3>

                    <p className="pb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aliquid facere ratione iste minus pariatur? Nam aspernatur numquam laboriosam eaque impedit? Dolorum, asperiores? Laudantium nobis sequi quos commodi harum minus quod ipsam error modi doloribus.</p>

                    <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aliquid facere ratione iste minus pariatur? Nam aspernatur numquam laboriosam eaque impedit? Dolorum, asperiores? Laudantium nobis sequi quos commodi harum minus quod ipsam error modi doloribus.</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default DashboardMain;