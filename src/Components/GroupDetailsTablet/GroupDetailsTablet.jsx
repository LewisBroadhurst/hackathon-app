import React from 'react';

const GroupDetailsTablet = () => {

    const handleMoreInfoClick = (event) => {
        event.preventDefault();

        console.log('click');
    }

  return (
    <>
    <section className=''>
    <div className="flex flex-col gap-2 w-full border-2 border-cMono400 bg-white rounded-md p-3">

        <div className=''>
            <h3 className='text-lg font-bold'>About Bright Network Socials</h3>

            <p className="text-sm">Welcome to the BNTA socials group! This quarter will be run by Oliver, Aaron, Michelle, and Hasmeet. We usually try to organise our socials to occur on the last friday of each month, so please remember to vote early so your voice can be heard!
            </p>
        </div>

        <div className='border-t py-1 flex justify-center hover:bg-cMono500 hover:cursor-pointer' onClick={handleMoreInfoClick}>
            <span className='text-center text-md'>More info.</span>
        </div>

    </div>
    </section>


    </>
  )
}

export default GroupDetailsTablet;