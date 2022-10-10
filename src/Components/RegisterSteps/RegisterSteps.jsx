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

        await setStepTracker(stepTracker - 1);

        if (stepTracker === 3) {
            setStepsActive( {...stepsActive, stepFour: ''})
        }

        if (stepTracker === 2) {
            setStepsActive( {...stepsActive, stepThree: ''})
        }

        if (stepTracker === 1) {
            setStepsActive( {...stepsActive, stepTwo: ''})
        }
    }

    const handleForwardArrow = async (event) => {
        event.preventDefault();

        if (stepTracker === 4) {
            return;
        }

        await setStepTracker(stepTracker + 1);

        if (stepTracker === 2) {
            setStepsActive( {...stepsActive, stepTwo: 'step-primary'})
        }

        if (stepTracker === 3) {
            setStepsActive( {...stepsActive, stepThree: 'step-primary'})
        }

        if (stepTracker === 4) {
            setStepsActive( {...stepsActive, stepFour: 'step-primary'})
        }
        
        console.log(stepTracker);
    }


  return (
    <section>
    
    <ul className="steps">
        <li className="step step-primary">Entity</li>
        <li className={`step ${stepsActive.stepTwo}`}>Details</li>
        <li className={`step ${stepsActive.stepThree}`}>Payment</li>
        <li className={`step ${stepsActive.stepFour}`}>Welcome!</li>
    </ul>

    <div className="btn-group">
        <button className="btn" onClick={handleBackArrow}>Button</button>
        <button className="btn" onClick={handleForwardArrow}>Button</button>
    </div>

    {stepTracker}
        
    </section>
  )
}

export default RegisterSteps;