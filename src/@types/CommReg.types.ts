export interface IStepsActive {
    stepTwo: string
    stepThree: string
    stepFour: string
}

export interface ICommRegContext {
    handleStepForward: () => {},
    handleStepBackward: () => {},
    registrationDetails: {},
    setRegistrationDetails: () => {},
    stepTracker: number,
    setStepTracker: () => {},
    stepsActive: {},
    setStepsActive: () => {}
}