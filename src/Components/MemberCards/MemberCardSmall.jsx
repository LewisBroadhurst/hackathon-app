import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const MemberCardSmall = () => {
  return (
    <section className='border-2 p-2 rounded-md flex flex-row justify-between items-center'>
        <div className='flex flex-row gap-4 items-center'>
            <div className='avatar online'>
                <div className='w-10 rounded-full'>
                    <img src='https://placeimg.com/192/192/people' alt='' />
                </div>
            </div>

            <div className='text-sm'>
                <h3>Lewis Broadhurst</h3>
                <h3>lewis1broadhurst@gmail.com</h3>
            </div>
        </div>
        
        <div className=''>
            <button className="bg-cMono700 text-white flex flex-row items-center rounded-lg gap-3 text-md p-2">
                Message
                <FontAwesomeIcon icon={faMessage} />
            </button>
        </div>
    </section>
  )
}

export default MemberCardSmall;