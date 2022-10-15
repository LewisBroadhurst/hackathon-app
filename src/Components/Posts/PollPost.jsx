import React from 'react';
import Portrait from "../../Assets/PortraitSquared.jpg";

const PollPost = () => {
  return (
    <section className="p-5 rounded-md bg-white border-2 border-cMono400">
        <div>
            <div className="flex flex-row items-center">
                <img src={Portrait} alt="" className="w-12 rounded-full mr-4"/>
                <div className="flex flex-col items-start">
                    <h3 className="text-xl">Steve Jenkins</h3>
                    <h5 className="text-sm">Today at 10:54am</h5>
                </div>
            </div>
            
            <div className="mt-4 border-b border-cMono700 pb-4">
                <h2>We have decided on the final options for the social next month! Please vote below 🗳️</h2>
            </div>

            <div className="flex flex-col gap-4 mt-4 border-b border-cMono700 pb-4">
                <div className="flex flex-row justify-between items-center p-3 bg-cMono400">
                    <h3>All Star Bowling Alley</h3>

                    <input type="checkbox" />
                </div>
                <div className="flex flex-row justify-between items-center p-3 bg-cMono400">
                    <h3>Cheeky Nandos</h3>

                    <input type="checkbox" />
                </div>
                <div className="flex flex-row justify-between items-center p-3 bg-cMono400">
                    <h3>Go Karting</h3>

                    <input type="checkbox" />
                </div>
            </div>

            <div className="flex flex-col items-center justify-between xl:flex-row xl:mt-4">
                <div className="flex flex-row items-center gap-2 my-2 xl:my-0">
                    <span>11 likes</span>
                    <span className="-translate-y-2 text-2xl">.</span>
                    <span>2 comments</span>
                </div>

                <div className="flex flex-row items-center gap-2 xl:-order-2">
                    <button className="w-28 py-1 bg-cBlue500 border-2 border-cMono300">Like</button>
                    <button className="w-28 py-1 bg-white border-2 border-cBlue500">Comment</button>
                </div>
            </div>
        </div>

    </section>
  )
}

export default PollPost;