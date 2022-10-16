import React from 'react'
import { useContext } from 'react'
import { CommercialRegistrationContext } from '../../../Contexts/CommericalRegistration.context'

const Step3 = () => {

    const {handleStepBackward, handleStepForward} = useContext(CommercialRegistrationContext);

  return (
    <section>
      <form action="" className='flex flex-col gap-4'>

        <div className='flex flex-row items-center border-2 rounded-lg p-2 border-cMono300'>
          <div className=''>
            <h2>Basic Plan</h2>

            <p>Basic FUN@5 plan consists of the following:</p>

            <ul>
              <li>Promoted throughout app via our promo tablet</li>
              <li>Users can view basic details of venue and will be linked to your website</li>
              <li>Analytics on how our users respond to your promo card and clicks through to your website</li>
            </ul>
          </div>
          <input type="radio" name="radio-1" className="radio" />
        </div>

        <div className='flex flex-row items-center border-2 rounded-lg p-2 border-cMono300'>
          <div className=''>
            <h2>Pro Plan</h2>

            <p>Basic FUN@5 plan consists of the following:</p>

            <ul>
              <li>Promoted throughout app via our promo tablet</li>
              <li>Users can view basic details of venue and will be linked to your website</li>
              <li>Analytics on how our users respond to your promo card and clicks through to your website</li>
            </ul>
          </div>
          <input type="radio" name="radio-1" className="radio" />
        </div>

        <div className='flex flex-row items-center border-2 rounded-lg p-2 border-cMono300'>
          <div className=''>
            <h2>Plus Plan</h2>

            <p>Basic FUN@5 plan consists of the following:</p>

            <ul>
              <li>Promoted throughout app via our promo tablet</li>
              <li>Users can view basic details of venue and will be linked to your website</li>
              <li>Analytics on how our users respond to your promo card and clicks through to your website</li>
            </ul>
          </div>
          <input type="radio" name="radio-1" className="radio" />
        </div>
        
        
        <div>
            <button className='btn' onClick={handleStepBackward}>Back</button>
            <button className='btn' onClick={handleStepForward}>Pay</button>
        </div>
        
      </form>
    </section>
  )
}

export default Step3