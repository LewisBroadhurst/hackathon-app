import React from 'react';
import RegisterSteps from '../Components/CommericalRegistration/RegisterSteps';
import CommReg1 from '../Assets/commerical_reg_1.jpg';
import Step1 from '../Components/CommericalRegistration/Steps/Step1';
import { useContext } from 'react';
import { CommercialRegistrationContext } from '../Contexts/CommericalRegistration.context';
import Step2 from '../Components/CommericalRegistration/Steps/Step2';
import Step3 from '../Components/CommericalRegistration/Steps/Step3';
import Step4 from '../Components/CommericalRegistration/Steps/Step4';

const CommercialRegistration = () => {

    const { stepTracker } = useContext(CommercialRegistrationContext);

    const handleRegStep = () => {

        switch(stepTracker) {
            case 1:
                return <Step1 />;
            case 2:
                return <Step2 />;
            case 3:
                return <Step3 />;
            case 4:
                return <Step4 />;
            default:
                <Step1 />
        }
    }

  return (
    <section className='h-screen'>
        <div className='flex flex-row'>
            <div className='w-1/2'>
                <img src={CommReg1} alt="" />
            </div>

            <div className='w-1/2 flex flex-col items-center justify-center gap-16'>
                <RegisterSteps />

                {handleRegStep(stepTracker)}
            </div>
        </div>
    </section>
  )
}

export default CommercialRegistration;