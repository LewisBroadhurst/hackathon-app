import CommunityPost from "../../../CommunityPost/CommunityPost";
import PollPost from "../../../PollPost/PollPost";

const DashboardEvents = () => {
  return (
    <section className="flex flex-col gap-2 rounded-md">
        <CommunityPost />

        <PollPost />
    </section>
  )
}

export default DashboardEvents;