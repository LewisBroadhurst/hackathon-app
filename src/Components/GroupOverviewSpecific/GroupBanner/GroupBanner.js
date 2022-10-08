
const GroupBanner = () => {
  return (
    <section className="py-6 border-b border-cMono800 flex flex-row gap-5">
      <div className="w-[350px]">
        {/* <h3>About Bright Network Socials</h3>

        <p className="text-xs">Welcome to the BNTA socials group! This quarter will be run by Oliver, Aaron, Michelle, and Hasmeet. We usually try to organise our socials to occur on the last friday of each month, so please remember to vote early so your voice can be heard!</p> */}

      </div>

      <div className="w-[700px] flex flex-col items-center">
        <h1 className="text-4xl mb-1 text-center sm:text-left md:text-5xl">Bright Network Socials</h1>

        <span className="md:pl-1">Next event: 12th October '22</span>

        <nav className="mt-4">
            <ul className="flex flex-row items-center flex-wrap gap-2 content-around text-xs sm:text-md md:text-lg">
                <li className="px-2 py-1 bg-cMono200 rounded-lg">Overview</li>
                <li className="px-2 py-1 bg-cMono200 rounded-lg">Events</li>
                <li className="px-2 py-1 bg-cMono200 rounded-lg">Polls</li>
                <li className="px-2 py-1 bg-cMono200 rounded-lg">Venues</li>
                <li className="px-2 py-1 bg-cMono200 rounded-lg">Members</li>
            </ul>
        </nav>
      </div>

      <div className="w-[350px]">

      </div>

    </section>
  )
}

export default GroupBanner;