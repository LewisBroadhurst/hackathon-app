import React from 'react'
import { useContext } from 'react';
import { CommercialRegistrationContext } from '../../../Contexts/CommericalRegistration.context';

const Step1 = () => {

    const { handleStepForward, organisation, venue } = useContext(CommercialRegistrationContext);

    const handleVenueClick = (event) => {
        event.preventDefault();



        handleStepForward();
    }

    const handleOrganisationClick = (event) => {
        event.preventDefault();

        handleStepForward();
    }

  return (
    <div className='h-[500px] border border-black gap-10 flex flex-col items-center'>
        <h3 className='text-4xl'>Are you a venue or an organisation?</h3>

        <div className="flex gap-5">
            <button className="btn" onClick={handleVenueClick}>Venue</button>
            <button className="btn" onClick={handleOrganisationClick}>Organisation</button>
        </div>
    </div>
  )
}

export default Step1;