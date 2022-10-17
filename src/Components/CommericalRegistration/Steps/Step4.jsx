import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CommercialRegistrationContext } from '../../../Contexts/CommericalRegistration.context';

const Step4 = () => {

  const {handleStepBackward} = useContext(CommercialRegistrationContext);

  return (
    <section>
        <h2>Welcome to the platform!</h2>

        
        <button className='btn' onClick={handleStepBackward}>Back</button>
        <button className='btn'><Link to={'/groupOverview'} >Lets go!</Link></button>
    </section>
  )
}

export default Step4;