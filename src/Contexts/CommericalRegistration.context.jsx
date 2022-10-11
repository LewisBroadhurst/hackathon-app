import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


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

const getPaymentValue = (packageValue, setPaymentRequired) => {
    return setPaymentRequired(packageValue);
}


const defaultStepsActive = {
    stepTwo: '',
    stepThree: '',
    stepFour: ''
}

const defaultCommercialDetails = {
    name: '',
    email: '',
    password: '',
    basicBio: [],
    photoUrls: [],
    paymentPackage: '',
    paymentRequired: 0,
    venue: false,
    organisation: false
}

export const CommercialRegistrationContext = createContext({
    paymentRequired: 0,
    paymentPackage: '',
    venue: false,
    organisation: false,
    name: '',
    email: '',
    password: '',
    basicBio: [],
    photoUrls: [],
    stepTracker: 1,
    stepsActive: {},
    handleStepForward: () => {},
    handleStepBackward: () => {}
});

export const CommercialRegistrationProvider = ({children}) => {
    const [paymentRequired, setPaymentRequired] = useState(0);
    const [registrationDetails, setRegistrationDetails] = useState({defaultCommercialDetails});
    const [stepTracker, setStepTracker] = useState(1);
    const [stepsActive, setStepsActive] = useState(defaultStepsActive);

    useEffect(() => {
        getPaymentValue(paymentRequired, setPaymentRequired);
    }, [paymentRequired]);

    const handleStepForward = () => {
        return handleForwardArrowFunc(stepTracker, setStepTracker, stepsActive, setStepsActive);
    }

    const handleStepBackward = () => {
        return handleBackArrowFunc(stepTracker, setStepTracker, stepsActive, setStepsActive);
    }

    const value = {
        paymentRequired,
        registrationDetails,
        stepTracker,
        stepsActive,
        handleStepForward,
        handleStepBackward
    }

    return <CommercialRegistrationContext.Provider value={value}>{children}</CommercialRegistrationContext.Provider>
}