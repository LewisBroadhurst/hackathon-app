import CommunityPost from '../../Posts/CommunityPost';
import PollPost from '../../Posts/PollPost';

const DashboardEvents = () => {
  return (
    <section className="flex flex-col gap-2 rounded-md">
        <CommunityPost />

        <PollPost />
    </section>
  )
}

export default DashboardEvents;