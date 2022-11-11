import { faGear, faSquareXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ChangeCommercialSettings = () => {
  return (
    <section className='text-2xl flex flex-xol items-center justify-center'>
      <label htmlFor="account-modal" className='hover:cursor-pointer hover:text-accent'>     
        <span htmlFor="editAccount"><FontAwesomeIcon icon={faGear} /></span>
      </label>

      {/* Modal for Editing Account */}
      <input type="checkbox" id="account-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box flex flex-col gap-2 text-neutral">
          <div className="modal-action p-0 m-0 flex flex-row justify-between items-center">
              <h3 className='text-lg font-bold'>Account details</h3>
              <label htmlFor="account-modal" className='text-3xl cursor-pointer hover:text-primary p-0 m-0'><FontAwesomeIcon icon={faSquareXmark} /></label>
          </div>

          <form  className='flex flex-col gap-4'>
            <input required type='text' placeholder='Name' name='name' className='input input-bordered w-full'  />

            <input required type="email" placeholder="Email" name='email' className="input input-bordered w-full"  />

            <input required type='number' placeholder="Mobile" name='mobile' className="input input-bordered w-full"  />
            
            <input required type="password" placeholder="Password" name='password' className="input input-bordered w-full"  />

            <button className='btn w-5/12 self-center' type='submit'>Change Details</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ChangeCommercialSettings