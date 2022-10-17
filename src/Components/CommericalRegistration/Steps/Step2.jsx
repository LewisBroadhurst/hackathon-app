import React, { useContext } from 'react';
import { CommercialRegistrationContext } from '../../../Contexts/CommericalRegistration.context';

const Step2 = () => {

    const {handleStepBackward, handleStepForward} = useContext(CommercialRegistrationContext);

  return (
    <section>
        <form className='flex flex-col gap-4 w-[400px]'>
            <input type='text' placeholder='Name' className='input input-bordered w-full' />

            <input type="email" placeholder="Email" className="input input-bordered w-full" />

            <input type="password" placeholder="Password" className="input input-bordered w-full" />


            <div className='flex flex-row justify-between'>
                <label htmlFor="">Please confirm you are an Organisation.</label>
                <input type="checkbox" className="checkbox" />
            </div>

            <div className='flex flex-row justify-between'>
                <label htmlFor="">Do you accept T's and C's?</label>
                <input type="checkbox" className="checkbox" />
            </div>

            <div className='flex flex-row justify-evenly'>
                <button className='btn w-5/12' onClick={handleStepBackward}>Back</button>
                <button className='btn w-5/12' onClick={handleStepForward}>Confirm Details</button>
            </div>
           
        </form>
    </section>
  )
}

export default Step2