import React from 'react';
import { useContext } from 'react';
import {CommercialRegistrationContext} from '../../Contexts/CommericalRegistration.context';

const RegisterSteps = () => {

    const {stepsActive} = useContext(CommercialRegistrationContext);

  return (
    <>
        <ul className="steps w-full">
            <li className="step step-primary">Entity</li>
            <li className={`step ${stepsActive.stepTwo}`}>Details</li>
            <li className={`step ${stepsActive.stepThree}`}>Payment</li>
            <li className={`step ${stepsActive.stepFour}`}>Welcome!</li>
        </ul>
    </>
  )
}

export default RegisterSteps;