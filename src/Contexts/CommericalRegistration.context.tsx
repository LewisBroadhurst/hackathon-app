import React, { useState, createContext } from 'react';
import { IStepsActive } from '../@types/CommReg.types'

const handleForwardArrowFunc = (stepTracker: any, setStepTracker: any, stepsActive: any, setStepsActive: any) => {
    if (stepTracker === 4) {
        return;
    } else if (stepTracker === 1) {
        setStepsActive( {...stepsActive, stepTwo: 'step-primary'})
    } else if (stepTracker === 2) {
        setStepsActive( {...stepsActive, stepThree: 'step-primary'})
    } else if (stepTracker === 3) {
        setStepsActive( {...stepsActive, stepFour: 'step-primary'})
    }

    setStepTracker(stepTracker + 1);
}

const handleBackArrowFunc = (stepTracker: any, setStepTracker: any, stepsActive: any, setStepsActive: any) => {
    if (stepTracker === 1) {
        return;
    } else if (stepTracker === 4) {
        setStepsActive( {...stepsActive, stepFour: ''})
    } else if (stepTracker === 3) {
        setStepsActive( {...stepsActive, stepThree: ''})
    } else if (stepTracker === 2) {
        setStepsActive( {...stepsActive, stepTwo: ''})
    }
    
    setStepTracker(stepTracker - 1);
}


const defaultRegDetails = {
    name: '',
    email: '',
    password: '',
    mobile: 0,
    basicBio: '',
    joinCode: '',
    location: '',
    photoUrls: [],
    product: '',
    eventType: '',
    cost: 999,
    venue: false,
    organisation: false
}




export const CommercialRegistrationContext = createContext({
    handleStepForward: () => {},
    handleStepBackward: () => {},
    registrationDetails: {},
    setRegistrationDetails: () => {},
    stepTracker: 1,
    setStepTracker: () => {},
    stepsActive: {},
    setStepsActive: () => {}
});


const defaultStepsActive  = {
    stepTwo: '',
    stepThree: '',
    stepFour: ''
}

export const CommercialRegistrationProvider: React.FC<React.ReactNode> = ({children}) => {
    const [registrationDetails, setRegistrationDetails] = useState(defaultRegDetails);
    const [stepTracker, setStepTracker] = useState(1);
    const [stepsActive, setStepsActive] = useState<IStepsActive>(defaultStepsActive);


    const handleStepForward = () => {
        return handleForwardArrowFunc(stepTracker, setStepTracker, stepsActive, setStepsActive);
    }

    const handleStepBackward = () => {
        return handleBackArrowFunc(stepTracker, setStepTracker, stepsActive, setStepsActive);
    }

    const value = {
        handleStepBackward,
        handleStepForward,
        registrationDetails,
        setRegistrationDetails,
        stepTracker,
        setStepTracker,
        stepsActive,
        setStepsActive,
    }

    return <CommercialRegistrationContext.Provider value={value}>{children}</CommercialRegistrationContext.Provider>
}