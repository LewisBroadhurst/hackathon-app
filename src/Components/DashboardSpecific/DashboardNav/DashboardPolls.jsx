import PollPost from "../../PollPost/PollPost";

const DashboardPolls = () => {
  return (
    <section className="flex flex-col gap-3 bg-white p-4 rounded-md border-2 border-cMono400 md:col-start-3 md:col-end-8 xl:col-start-4 xl:col-end-7">
        <PollPost />

        <PollPost />

        <PollPost />

        <PollPost />
    </section>
  )
}

export default DashboardPolls;