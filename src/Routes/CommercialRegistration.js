import React from 'react';
import RegisterSteps from '../Components/RegisterSteps/RegisterSteps';
import CommReg1 from '../Assets/commerical_reg_1.jpg';

const CommercialRegistration = () => {
  return (
    <section className='h-screen'>
        <div className='flex flex-row'>
            <div className='w-1/2'>
                <img src={CommReg1} alt="" />
            </div>

            <div className='w-1/2 flex flex-col items-center justify-center gap-16'>
                <RegisterSteps />

                <div className='h-[500px] border border-black gap-10 flex flex-col items-center'>
                    <h3 className='text-4xl'>Are you a venue or an organisation?</h3>

                    <div className="flex gap-5">
                        <button className="btn">Venue</button>
                        <button className="btn">Organisation</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CommercialRegistration;