import React from 'react'
import { useContext } from 'react'
import { CommercialRegistrationContext } from '../../../Contexts/CommericalRegistration.context'

const Step3 = () => {

    const {handleStepBackward, handleStepForward} = useContext(CommercialRegistrationContext);

  return (
    <section>
        <form>
            <h2>Pick your payment plan</h2>

            <form action="">

            </form>


            <div>
                <button className='btn' onClick={handleStepBackward}>Back</button>
                <button className='btn' onClick={handleStepForward}>Pay</button>
            </div>
        </form>
    </section>
  )
}

export default Step3