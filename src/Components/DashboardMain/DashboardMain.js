
const DashboardMain = () => {
  return (
    <section className="m-10 flex flex-col items-stretch">

        <div className="pb-4 border-b border-cGrey400 flex flex-col">

            <span className="pl-1">Dashboard / Bright Network Socials</span>

            <h1 className="text-5xl pb-1 mt-2 mb-2">Bright Network Socials</h1>

            <span className="pl-1">Next event: 12th October '22</span>

            <nav className="mt-3 pl-1">
                <ul className="flex flex-row items-center">
                    <li className="mr-5 px-3 py-1 bg-cOrange200 rounded-lg">Overview</li>
                    <li className="mr-5 px-3 py-1 bg-cOrange200 rounded-lg">Events</li>
                    <li className="mr-5 px-3 py-1 bg-cOrange200 rounded-lg">Polls</li>
                    <li className="mr-5 px-3 py-1 bg-cOrange200 rounded-lg">Members</li>
                </ul>
            </nav>
        </div>

        <div className="mt-4 flex flex-row justify-between h-full">
            <div className="mr-4 w-2/3 bg-cGrey200 rounded-lg p-3">
                <p className="pb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aliquid facere ratione iste minus pariatur? Nam aspernatur numquam laboriosam eaque impedit? Dolorum, asperiores? Laudantium nobis sequi quos commodi harum minus quod ipsam error modi doloribus.</p>

                <p className="pb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aliquid facere ratione iste minus pariatur? Nam aspernatur numquam laboriosam eaque impedit? Dolorum, asperiores? Laudantium nobis sequi quos commodi harum minus quod ipsam error modi doloribus.</p>

                <p className="pb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aliquid facere ratione iste minus pariatur? Nam aspernatur numquam laboriosam eaque impedit? Dolorum, asperiores? Laudantium nobis sequi quos commodi harum minus quod ipsam error modi doloribus.</p>

                <p className="pb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aliquid facere ratione iste minus pariatur? Nam aspernatur numquam laboriosam eaque impedit? Dolorum, asperiores? Laudantium nobis sequi quos commodi harum minus quod ipsam error modi doloribus.</p>
            </div>

            <div className="ml-4 w-1/3 bg-cGrey200 rounded-lg p-3 h-full">
                <h3 className="pb-4 text-2xl">Upcoming Events</h3>
                <p className="pb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aliquid facere ratione iste minus pariatur? Nam aspernatur numquam laboriosam eaque impedit? Dolorum, asperiores? Laudantium nobis sequi quos commodi harum minus quod ipsam error modi doloribus.</p>

                <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aliquid facere ratione iste minus pariatur? Nam aspernatur numquam laboriosam eaque impedit? Dolorum, asperiores? Laudantium nobis sequi quos commodi harum minus quod ipsam error modi doloribus.</p>

                <h3 className="py-4 text-2xl">Past Events</h3>
                <p className="pb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aliquid facere ratione iste minus pariatur? Nam aspernatur numquam laboriosam eaque impedit? Dolorum, asperiores? Laudantium nobis sequi quos commodi harum minus quod ipsam error modi doloribus.</p>

                <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aliquid facere ratione iste minus pariatur? Nam aspernatur numquam laboriosam eaque impedit? Dolorum, asperiores? Laudantium nobis sequi quos commodi harum minus quod ipsam error modi doloribus.</p>
            </div>
        </div>

    </section>
  )
}

export default DashboardMain;