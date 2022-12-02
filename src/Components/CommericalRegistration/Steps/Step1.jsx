import React, { useContext, ChangeEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { CommercialRegistrationContext } from '../../../Contexts/CommericalRegistration.context';


const Step1 = () => {

    const { handleStepForward, registrationDetails, setRegistrationDetails } = useContext(CommercialRegistrationContext);

    const handleVenueClick = async (event) => {
        event.preventDefault();

        setRegistrationDetails({...registrationDetails, venue: true});
        handleStepForward();

        console.log(registrationDetails);
    }

    const handleOrganisationClick = (event) => {
        event.preventDefault();

        setRegistrationDetails({...registrationDetails, organisation: true});
        handleStepForward();

        console.log(registrationDetails);
    }

  return (
    <div className='flex flex-col gap-5 text-center mt-10 xl:mt-32'>
        <h3 className='text-2xl'>Are you a venue or an organisation?</h3>

        <div className="flex flex-col gap-5 items-center justify-center md:flex-row">
            <button className="btn w-1/2" onClick={handleVenueClick}>Venue</button>
            <button className="btn w-1/2" onClick={handleOrganisationClick}>Organisation</button>
        </div>

        <span className='text-white border-b-2 border-slate-400 self-center hover:border-primary hover:text-primary hover:cursor-pointer'>
            <Link to={'/'} >Not a venue or organisation?</Link>
        </span>
    </div>
  )
}

export default Step1;