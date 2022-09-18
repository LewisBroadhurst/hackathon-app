
const GroupBanner = () => {
  return (
    <section className="pb-6 border-b border-cGrey400 flex flex-col items-center">
      <span className="text-md md:pl-1">Dashboard / Bright Network Socials</span>

      <h1 className="text-4xl mt-2 mb-1 text-center sm:text-left md:text-5xl">Bright Network Socials</h1>

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
    </section>
  )
}

export default GroupBanner;