import React, { useEffect, useState, createContext } from 'react';

const handleForwardArrowFunc = (stepTracker, setStepTracker, stepsActive, setStepsActive) => {
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

const handleBackArrowFunc = (stepTracker, setStepTracker, stepsActive, setStepsActive) => {
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

const defaultStepsActive = {
    stepTwo: '',
    stepThree: '',
    stepFour: ''
}

const defaultRegDetails = {
    name: '',
    email: '',
    password: '',
    basicBio: '',
    photoUrls: [],
    paymentPackage: '',
    paymentRequired: 0,
    venue: false,
    organisation: false
}

const defaultPaymentPackage = {
    cost: 0,
    package: ''
}

export const CommercialRegistrationContext = createContext({
    paymentRequired: 0,
    paymentPackage: {},
    registrationDetails: {},
    stepTracker: 1,
    stepsActive: {},
    handleStepForward: () => {},
    handleStepBackward: () => {},
    setRegistrationDetails: () => {},
    setPaymentPackage: () => {},
    setStepTracker: () => {},
    setStepsActive: () => {}
});

export const CommercialRegistrationProvider = ({children}) => {
    const [paymentPackage, setPaymentPackage] = useState(defaultPaymentPackage);
    const [registrationDetails, setRegistrationDetails] = useState(defaultRegDetails);
    const [stepTracker, setStepTracker] = useState(1);
    const [stepsActive, setStepsActive] = useState(defaultStepsActive);


    const handleStepForward = () => {
        return handleForwardArrowFunc(stepTracker, setStepTracker, stepsActive, setStepsActive);
    }

    const handleStepBackward = () => {
        return handleBackArrowFunc(stepTracker, setStepTracker, stepsActive, setStepsActive);
    }

    const value = {
        paymentPackage,
        setPaymentPackage,
        registrationDetails,
        setRegistrationDetails,
        stepTracker,
        setStepTracker,
        stepsActive,
        setStepsActive,
        handleStepBackward,
        handleStepForward
    }

    return <CommercialRegistrationContext.Provider value={value}>{children}</CommercialRegistrationContext.Provider>
}