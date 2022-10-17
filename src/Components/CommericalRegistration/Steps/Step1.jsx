import React, { useContext } from 'react';
import { CommercialRegistrationContext } from '../../../Contexts/CommericalRegistration.context';

const Step1 = () => {

    const { handleStepForward } = useContext(CommercialRegistrationContext);

    const handleVenueClick = (event) => {
        event.preventDefault();
        handleStepForward();
    }

    const handleOrganisationClick = (event) => {
        event.preventDefault();
        handleStepForward();
    }

  return (
    <div className='flex flex-col gap-5 text-center mt-10 xl:mt-32'>
        <h3 className='text-2xl'>Are you a venue or an organisation?</h3>

        <div className="flex flex-col gap-5 items-center justify-center md:flex-row">
            <button className="btn w-1/2" onClick={handleVenueClick}>Venue</button>
            <button className="btn w-1/2" onClick={handleOrganisationClick}>Organisation</button>
        </div>
    </div>
  )
}

export default Step1;