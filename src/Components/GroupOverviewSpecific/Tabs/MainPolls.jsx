import PollPost from '../../Posts/PollPost';

const DashboardPolls = () => {
  return (
    <section className="flex flex-col gap-2 rounded-md">
        <PollPost />

        <PollPost />

        <PollPost />

        <PollPost />
    </section>
  )
}

export default DashboardPolls;