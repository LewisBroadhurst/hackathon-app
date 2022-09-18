import Portrait from "../../Assets/PortraitSquared.jpg";

const CommunityPost = () => {
  return (
    <section className="my-4 p-5 bg-cMono200 rounded-sm">
        <div>
            <div className="flex flex-row items-center">
                <img src={Portrait} alt="" className="w-12 rounded-full mr-4"/>
                <div className="flex flex-col items-start">
                    <h3>Hasmeet Kaur</h3>
                    <h5>Today at 10:54am</h5>
                </div>
            </div>
            
            <p className="my-4 border-b border-cGrey400 pb-4">Remember to cast your vote for the upcoming September social! It's a close race between bowling and mini golf 🎳⛳</p>

            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-2">
                    <button className="w-28 py-1 bg-cMono500 text-white">Like</button>
                    <button className="w-28 py-1 bg-cMono500 text-white">Comment</button>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <span>11 likes</span>
                    <span className="-translate-y-2 text-2xl">.</span>
                    <span>2 comments</span>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default CommunityPost;