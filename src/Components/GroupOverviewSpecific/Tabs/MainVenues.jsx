import CommunityPost from '../../Posts/CommunityPost';
import PollPost from '../../Posts/PollPost';

const DashboardVenues = () => {
  return (
    <section className="flex flex-col gap-2 rounded-md">
        <CommunityPost />

        <PollPost />

        <CommunityPost />

        <PollPost />
    </section>
  )
}

export default DashboardVenues;