import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '../PaymentForm/index.js';


const PUBLIC_KEY = "pk_test_51LIKHeCOJ4jh1WDG6UPsapHEdzTXvlaWF5mhi7zRbuosLEOjsAr7sPUnSnPEzF2ptnnffoaOIToeN17u34InPIsF00KmfF3WLL";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {

  return (
    <Elements stripe={stripeTestPromise}>
        <PaymentForm></PaymentForm>
    </Elements>
  )

}