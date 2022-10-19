import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CommercialRegistrationContext } from '../../../Contexts/CommericalRegistration.context';

const Step4 = () => {

  const {handleStepBackward} = useContext(CommercialRegistrationContext);
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
  }

  return (
    <section>
        <h2>Welcome to the platform!</h2>

        <form>
          <div className='h-40 bg-cMono300 rounded-3xl p-5 flex flex-col gap-2'>
            <CardElement />
          </div>
          <button className='btn'>Pay</button>
        </form>

        <button className='btn' onClick={handleStepBackward}>Back</button>
        <button className='btn'><Link to={'/groupOverview'} >Lets go!</Link></button>
    </section>
  )
}

export default Step4;