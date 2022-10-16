import React from 'react'
import { useContext } from 'react'
import { CommercialRegistrationContext } from '../../../Contexts/CommericalRegistration.context'

const Step2 = () => {

    const {handleStepBackward, handleStepForward} = useContext(CommercialRegistrationContext);

  return (
    <section>
        <form>
            <div>
                <label htmlFor="">Name</label>
                <input type="text"  />
            </div>

            <div>
                <label htmlFor="">Email</label>
                <input type="text" />
            </div>

            <div>
                <label htmlFor="">Password</label>
                <input type="text" />
            </div>

            <div>
                <label htmlFor="">Please confirm you are an Organisation.</label>
                <input type="checkbox" />
            </div>

            <div>
                <label htmlFor="">Do you accept T's and C's?</label>
                <input type="checkbox" />
            </div>

            <div>
            <button className='btn' onClick={handleStepBackward}>Back</button>
            <button className='btn' onClick={handleStepForward}>Confirm Details</button>
            </div>
           
        </form>
    </section>
  )
}

export default Step2