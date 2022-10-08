
const GroupBanner = () => {
  return (
    <section className="py-6 border-b border-cMono800 flex flex-row gap-5">

      <div className="w-[700px] mx-auto flex flex-col items-center">
        <h1 className="text-4xl mb-1 text-center sm:text-left md:text-5xl">Bright Network Socials</h1>

        <span className="md:pl-1">Next event: 12th October '22</span>

        {/* <nav className="mt-4">
            <ul className="flex flex-row items-center flex-wrap gap-2 content-around text-xs sm:text-md md:text-lg">
                <li className="px-2 py-1 bg-cMono200 rounded-lg">Overview</li>
                <li className="px-2 py-1 bg-cMono200 rounded-lg">Events</li>
                <li className="px-2 py-1 bg-cMono200 rounded-lg">Polls</li>
                <li className="px-2 py-1 bg-cMono200 rounded-lg">Venues</li>
                <li className="px-2 py-1 bg-cMono200 rounded-lg">Members</li>
            </ul>
        </nav> */}

        <div className="tabs tabs-boxed flex gap-2 mt-4">
          <a className="tab tab-active">Overview</a> 
          <a className="tab">Events</a> 
          <a className="tab">Polls</a>
          <a className="tab">Venues</a> 
        </div>
      </div>

    </section>
  )
}

export default GroupBanner;