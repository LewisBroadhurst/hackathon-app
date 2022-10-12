import React from 'react';
import { useContext } from 'react';
import {CommercialRegistrationContext} from '../../Contexts/CommericalRegistration.context';

const RegisterSteps = () => {

    const {handleStepBackward, handleStepForward, stepsActive} = useContext(CommercialRegistrationContext);

  return (
    <>
        <ul className="steps w-full">
            <li className="step step-primary">Entity</li>
            <li className={`step ${stepsActive.stepTwo}`}>Details</li>
            <li className={`step ${stepsActive.stepThree}`}>Payment</li>
            <li className={`step ${stepsActive.stepFour}`}>Welcome!</li>
        </ul>

        <div className="btn-group">
        <button className="btn" onClick={handleStepForward}>Button</button>
        <button className="btn" onClick={handleStepBackward}>Button</button>
        </div>
    </>
  )
}

export default RegisterSteps;