import React from 'react';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MemberCardSmall from '../../MemberCards/MemberCardSmall';

const GroupMembersCard = () => {
  return (
    <>
    <section className=''>
    <div className="flex flex-col gap-2 w-full border-2 border-cMono400 bg-white rounded-md">

        <div className='flex flex-col gap-1 py-1 px-5 pt-3'>

        <h3 className='font-bold text-center'>Group Members</h3>

        <ul className='flex flex-row justify-center'>

          <li className="avatar online">
              <div className="w-12 rounded-full">
                  <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
          </li>
          <li className="avatar online -ml-2">
              <div className="w-12 rounded-full">
                  <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
          </li>
          <li className="avatar offline -ml-2">
              <div className="w-12 rounded-full">
                  <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
          </li>
          <li className="avatar online -ml-2">
              <div className="w-12 rounded-full">
                  <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
          </li>
          <li className="avatar placeholder flex justify-center items-center bg-cMono800 rounded-full -ml-2">
              <div className="w-12 rounded-full flex justify-center items-center text-white">
                  +10
              </div>
          </li>
        </ul>

        </div>

        <label htmlFor="members-modal" className="modal-button flex gap-3 justify-center items-center border-t rounded-b-md py-2 hover:text-white hover:bg-cMono500 hover:cursor-pointer">
          <span className='text-center text-md'>Show all</span>
          <span><FontAwesomeIcon icon={faArrowRight} /> </span>
        </label>

    </div>
    </section>
    
    {/* CODE FOR MODAL */}

    <input type="checkbox" id="members-modal" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box h-[700px]">

        <div className='flex flex-row justify-between items-center pb-1 border-b-2 border-cMono700 mb-4'>
          <h3 className="font-bold text-lg">All members of Bright Network Socials</h3>
          <label htmlFor="members-modal" className="btn btn-xs btn-circle">✕</label>
        </div>

        <ul className='flex flex-col gap-2'>
          <li><MemberCardSmall /></li>
          <li><MemberCardSmall /></li>
          <li><MemberCardSmall /></li>
          <li><MemberCardSmall /></li>
          <li><MemberCardSmall /></li>
          <li><MemberCardSmall /></li>
          <li><MemberCardSmall /></li>
          <li><MemberCardSmall /></li>
          <li><MemberCardSmall /></li>
          <li><MemberCardSmall /></li>
          <li><MemberCardSmall /></li>
          <li><MemberCardSmall /></li>
        </ul>
      </div>
    </div>

    {/* CODE FOR MODAL */}

    </>
  )
}

export default GroupMembersCard;