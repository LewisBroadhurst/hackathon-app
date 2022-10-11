import React from 'react'
import VenueCarousel from '../VenueCarousel/VenueCarousel'

const VenueMain = () => {
  return (
    <section className='mt-12'>
        <div className='w-[1200px] mx-auto'>

        <div className='py-4'>
            <VenueCarousel />
        </div>

        <div >
            <h1 className='text-center text-3xl pb-2 mb-6 border-b-2 border-cMono800'>Five Star Bowling Alley</h1>
        </div>

        <div className='flex flex-row gap-5'>
            <div className='w-[850px] bg-white border-2 border-cMono300 rounded-lg p-5'>
                <h3 className='font-bold text-3xl pb-4'>About us</h3>

                <div className='flex flex-col gap-2 text-xl'>
                <p>Our four mashed-up crazy golf courses at our London venue will blow your mind!</p>
                <p>Groups of up to eight can book mini golf online, with some walk-up tickets available too, (first come first served).</p>
                <p>Want to add on extra people? Click the button below.</p>
                <p>If you love things loud and flashy, you’re in the right place. Our venues contain flashing lights, UV lights, and loud music.</p>
                </div>

                <h3 className='font-bold text-3xl py-4'>You'll love us because...</h3>

                <div className='flex flex-row justify-evenly'>

                <div className='w-96 border border-black rounded-lg'>
                    <div className='rounded-lg'>
                    <img className='rounded-t-lg' src="https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwaGF2aW5nJTIwZnVufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
                    </div>
                    
                    <div className='p-2 flex flex-col gap-2'>
                    <h3 className='text-2xl font-bold'>Drinks</h3>

                    <p>Our bars serve a range of cocktails, beers & spirits, along with mocktails & softs</p>

                    <button className='btn btn-block'>View Menu</button>
                    </div>
                </div>

                <div className='w-96 border border-black rounded-lg'>
                    <div className='rounded-lg'>
                    <img className='rounded-t-lg' src="https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwaGF2aW5nJTIwZnVufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
                    </div>
                    
                    <div className='p-2 flex flex-col gap-2'>
                    <h3 className='text-2xl font-bold'>Drinks</h3>

                    <p>Our bars serve a range of cocktails, beers & spirits, along with mocktails & softs</p>

                    <button className='btn btn-block'>View Menu</button>
                    </div>
                </div>

                </div>

            </div>

            <div className='flex flex-col gap-5 w-[350px]'>
                <div className='h-48 bg-violet-50'>
                    Booking System
                    Contact Details
                </div>

                <div className='h-48 bg-violet-50'>
                    Google Maps
                </div>
            </div>
        </div>

        </div>
    </section>
  )
}

export default VenueMain