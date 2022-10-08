
const GroupOverviewEventCard = () => {
  return (
    <section className="flex flex-row justify-start items-center gap-4 py-2 w-full border-t border-cMono400 text-cMono600">

        <div className="avatar">
          <div className="w-16 rounded">
            <img src="https://placeimg.com/192/192/people" alt="" />
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-lg">Five Star Bowling</h2>

          <span className="text-xs">18th September @ 3pm</span>

          <span className="text-xs">17 attendees, including Oliver</span>
        </div>
    </section>
  )
}

export default GroupOverviewEventCard;