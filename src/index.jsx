import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CommercialRegistrationProvider } from './Contexts/CommericalRegistration.context';
import {Elements} from '@stripe/react-stripe-js';
import {stripePromise} from './Utils/Stripe.js';
import {UserProvider} from './Contexts/User.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <UserProvider>
  <CommercialRegistrationProvider>
  <Elements stripe={stripePromise}>
    <App />
  </Elements>
  </CommercialRegistrationProvider>
  </UserProvider>
  </React.StrictMode>
);
