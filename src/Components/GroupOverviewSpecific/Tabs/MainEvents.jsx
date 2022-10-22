import CommunityPost from '../../SocialPosts/CommunityPost';
import PollPost from '../../SocialPosts/PollPost';

const DashboardEvents = () => {
  return (
    <section className="flex flex-col gap-2 rounded-md">
        <CommunityPost />

        <PollPost />
    </section>
  )
}

export default DashboardEvents;