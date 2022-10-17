import React, { useContext } from 'react';
import RegisterSteps from '../Components/CommericalRegistration/RegisterSteps';
import CommReg1 from '../Assets/commerical_reg_1.jpg';
import CommRegLS from '../Assets/commreg_landscape.jpg';
import Footer from '../Components/Footer/Footer';
import Step1 from '../Components/CommericalRegistration/Steps/Step1';
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
    <section className='flex flex-col gap-5 h-screen xl:gap-0'>

        <div className='flex flex-col h-screen xl:flex-row xl:items-center'>

            <div className='xl:w-1/2'>
                <img className='rounded-b-2xl xl:hidden' src={CommRegLS} alt="" />
                <img className='hidden rounded-r-2xl xl:flex' src={CommReg1} alt="" />
            </div>

            <div className='flex flex-col items-center gap-10 mt-10 xl:w-1/2 xl:self-start xl:mt-28'>
                <h2 className='text-2xl text-center font-bold'>Become a part of FUN @ FIVE</h2>

                <RegisterSteps />

                {handleRegStep(stepTracker)}
            </div>

        </div>

        <Footer />

    </section>
  )
}

export default CommercialRegistration;