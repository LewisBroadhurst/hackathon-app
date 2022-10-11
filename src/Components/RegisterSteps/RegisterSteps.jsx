import React, {useState} from 'react';

const defaultStepsActive = {
    stepTwo: '',
    stepThree: '',
    stepFour: ''
}

const RegisterSteps = () => {

    const [stepTracker, setStepTracker] = useState(1);
    const [stepsActive, setStepsActive] = useState(defaultStepsActive);

    const handleBackArrow = async (event) => {
        event.preventDefault();

        if (stepTracker === 1) {
            return;
        }

        if (stepTracker === 4) {
            setStepsActive( {...stepsActive, stepFour: ''})
        }

        if (stepTracker === 3) {
            setStepsActive( {...stepsActive, stepThree: ''})
        }

        if (stepTracker === 2) {
            setStepsActive( {...stepsActive, stepTwo: ''})
        }

        setStepTracker(stepTracker - 1);
    }

    const handleForwardArrow = async (event) => {
        event.preventDefault();

        if (stepTracker === 4) {
            return;
        }

        if (stepTracker === 1) {
            setStepsActive( {...stepsActive, stepTwo: 'step-primary'})
        }

        if (stepTracker === 2) {
            setStepsActive( {...stepsActive, stepThree: 'step-primary'})
        }

        if (stepTracker === 3) {
            setStepsActive( {...stepsActive, stepFour: 'step-primary'})
        }
        
        setStepTracker(stepTracker + 1);
    }


  return (
        <ul className="steps w-full">
            <li className="step step-primary">Entity</li>
            <li className={`step ${stepsActive.stepTwo}`}>Details</li>
            <li className={`step ${stepsActive.stepThree}`}>Payment</li>
            <li className={`step ${stepsActive.stepFour}`}>Welcome!</li>
        </ul>
  )
}

export default RegisterSteps;