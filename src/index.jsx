import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CommercialRegistrationProvider } from './Contexts/CommericalRegistration.context';
import {Elements} from '@stripe/react-stripe-js';
import {stripePromise} from './Stripe/Stripe.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <CommercialRegistrationProvider>
  <Elements stripe={stripePromise}>
    <App />
  </Elements>
  </CommercialRegistrationProvider>
  </React.StrictMode>
);
