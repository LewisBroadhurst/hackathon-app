import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getEventTypes } from '../../../API/EventEnumAPI';
import { CommercialRegistrationContext } from '../../../Contexts/CommericalRegistration.context';

const Step2 = () => {

    const {handleStepBackward, handleStepForward, registrationDetails, setRegistrationDetails} = useContext(CommercialRegistrationContext);
    const {venue} = registrationDetails;

    const [eventTypes, setEventTypes] = useState(null);

    useEffect(() => {
        handleGetEventTypes();
    })

    const handleGetEventTypes = async () => {
        await getEventTypes(setEventTypes);
    }

    const handleReturnToStep1 = (event) => {
        event.preventDefault();

        setRegistrationDetails({...registrationDetails, organisation: false});
        setRegistrationDetails({...registrationDetails, venue: false});
        handleStepBackward();
    }

    const handleDetailsUpdates = (event) => {
        event.preventDefault();

        const changingAttribute = event.target.getAttribute('name');
        const valueOfAttribute = event.target.value;
        console.log(valueOfAttribute, changingAttribute)

        setRegistrationDetails({...registrationDetails, [changingAttribute]: valueOfAttribute});
        console.log(registrationDetails);
    }

    const handleConfirmDetails = (event) => {
        event.preventDefault();

        const isConfirmationBoxChecked = document.getElementById('confirmation-checkbox').checked;
        const isTCsBoxChecked = document.getElementById('t-c-checkbox').checked;

        if (!isConfirmationBoxChecked || !isTCsBoxChecked) {
            return alert('Please confirm the type of your account and that you accept the T&Cs.')
        }

        return handleStepForward();
    }

    const venueOrOrgan = () => {
        if (venue) {
            return 'Venue';
        } 
        
        return 'Organisation';
    }


  return (
    <section>
        <form onSubmit={handleConfirmDetails} className='flex flex-col gap-4 w-[400px]'>
            <input required type='text' placeholder='Name' name='name' className='input input-bordered w-full' onChange={handleDetailsUpdates} />

            <input required type="email" placeholder="Email" name='email' className="input input-bordered w-full" onChange={handleDetailsUpdates} />

            <input required type='number' placeholder="Mobile" name='mobile' className="input input-bordered w-full" onChange={handleDetailsUpdates} />

            {
               venue ?
               <>
                <input required type="text" placeholder="Location" name='location' className="input input-bordered w-full" onChange={handleDetailsUpdates} />
                <select className="select select-bordered w-full" name='eventType' onChange={handleDetailsUpdates}>
                    <option disabled selected>Type of venue</option>
                    {
                        !eventTypes ? <option>loading...</option>
                        :
                        eventTypes.map((type, i) => {
                            return (
                                <option key={i}>{type.niceName}</option>
                            )
                        })
                    }
                </select>
               </>
               :
               (
                <input required type="text" placeholder="Join code" name='joinCode' className="input input-bordered w-full" onChange={handleDetailsUpdates} />
               )
            }
            

            <input required type="password" placeholder="Password" name='password' className="input input-bordered w-full" onChange={handleDetailsUpdates} />

            <div className='flex flex-row justify-between'>
                <label htmlFor="">Please confirm you are an {venueOrOrgan()}.</label>
                <input id='confirmation-checkbox' type="checkbox" className="checkbox border-2 border-neutral-focus" />
            </div>

            <div className='flex flex-row justify-between'>
                <label htmlFor="">Do you accept the T's and C's?</label>
                <input id='t-c-checkbox' type="checkbox" className="checkbox border-2 border-neutral-focus" />
            </div>

            <div className='flex flex-row justify-evenly'>
                <button className='btn w-5/12' onClick={handleReturnToStep1}>Back</button>
                <button className='btn w-5/12' type='submit'>Confirm Details</button>
            </div>
        </form>
    </section>
  )
}

export default Step2;