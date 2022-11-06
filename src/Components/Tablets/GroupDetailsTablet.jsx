import React from 'react';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const GroupDetailsTablet = () => {

  return (
    <section>
      <section className=''>
        <div className="flex flex-col gap-2 w-full customShadow1 bg-white rounded-md">
          <div className='flex flex-col gap-1 py-1 px-5 pt-3'>
            <h3 className='font-bold'>About Bright Network Socials</h3>

            <p className="text-sm">Welcome to the BNTA socials group! This quarter will be run by Oliver, Aaron, Michelle, and Hasmeet. We usually try to organise our socials to occur on the last friday of each month, so please remember to vote early so your voice can be heard!</p>
          </div>

          <label htmlFor="group-overview-modal" className="modal-button flex gap-3 justify-center items-center border-t rounded-b-md py-2 hover:text-white hover:bg-secondary hover:cursor-pointer">

            <span className='text-center text-md'>More info.</span>

            <span><FontAwesomeIcon icon={faArrowRight} /> </span>
          </label>

        </div>
      </section>
    
      {/* CODE FOR MODAL */}

      <input type="checkbox" id="group-overview-modal" className="modal-toggle" />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>

          <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>

          <div className="modal-action">
            <label htmlFor="group-overview-modal" className="btn">Yay!</label>
          </div>
        </div>
      </div>

    </section>
  )
}

export default GroupDetailsTablet;