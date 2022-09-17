import Bowling from "../../Assets/bowling.avif";

const GroupOverviewEventCard = () => {
  return (
    <section className="flex flex-row justify-center gap-12 bg-cOrange100 py-4 px-4">
        <div className="w-44">
            <img src={Bowling} alt="" />
        </div>

        <div className="flex flex-col justify-between">
            <h2 className="text-3xl">Five Star Bowling</h2>

            <div className="flex flex-row justify-between">
                <span>18th September '22</span>
                <span>3pm</span>
            </div>

            <div className="flex flex-row justify-between">
                <span>132 Old Barr Lane</span>
                <span>W9 5HJ</span>
            </div>

            <span className="text-sm">17 attendees, including Oliver and Hasmeet</span>
        </div>
    </section>
  )
}

export default GroupOverviewEventCard;