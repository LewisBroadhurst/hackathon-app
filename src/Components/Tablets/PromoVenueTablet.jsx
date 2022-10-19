import React from 'react';

const PromoVenueTablet = () => {
  return (
    <section className="">
        <div className="flex flex-col gap-6 w-full border-2 border-cMono400 bg-white rounded-md h-min">

            <div className="rounded-md p-2 px-4">
                <h3 className="text-md font-bold pb-1 border-b mb-2 text-center text-cMono800">Promoted Venues</h3>

                <div className="flex flex-col gap-2">

                <div className="flex flex-col items-center w-full">
                    <div className="card w-80 border-2">
                      <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                      <div className="card-body p-3 gap-1">
                        <h2 className="card-title">
                          5 Star Bowling Alley
                          <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Could you spare a strike?</p>
                        <div className="card-actions justify-end">
                          <div className="badge badge-outline">Active</div> 
                          <div className="badge badge-outline">Games</div>
                        </div>
                      </div>
                    </div>
                </div>

                <div className="flex flex-col items-center w-full">
                    <div className="card w-80 border-2">
                      <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                      <div className="card-body p-3 gap-1">
                        <h2 className="card-title">
                          Pizza Express
                          <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Not the one Prince Andrew visited.</p>
                        <div className="card-actions justify-end">
                          <div className="badge badge-outline">Food & Drink</div> 
                          <div className="badge badge-outline">Relaxed</div>
                        </div>
                      </div>
                    </div>
                </div>

                </div>

            </div>

        </div>
    </section>
  )
}

export default PromoVenueTablet;