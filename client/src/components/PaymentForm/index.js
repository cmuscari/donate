import React, {useState} from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm() {
    // Allows for state to be enabled from React
    const [success, setSuccess] = useState(false);
    // Allows for useStripe function to be used from react-stripe-js
    const stripe = useStripe();
    //allows for useElements to be used from react-stripe-js
    const elements = useElements();

    // async function to handle payment submission
    // ! SUBMIT HANDLER
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const { error, paymentMethod } =await stripe.createPaymentMethod({
            //hardcoded for card payments
            type: "card",
            card: elements.getElement(CardElement)
        })
    
    if(!error){
        try {
            const {id} = paymentMethod
            // first argument is link to donate on site
            // second argument is the amount of the payment
            const response = await axios.post("http://localhost:3001/donate",{
                amount: 500,
                id
            })
            if(response.data.success){
                console.log('Successful payment')
                setSuccess(true)
            }
        } catch (error) {
            console.log("Error", error)
        }
    }else{
        console.log(error.message)
    }
}

  return (
    <>
    {!success ?
    <form onSubmit={handleSubmit}>
        <fieldset className='FormGroup'>
            <div className='FormRow'>
            <CardElement options={CARD_OPTIONS}/>
            </div>
        </fieldset>
        <button>Donate</button>
    </form>
    :
    <div>
        <h2>You just donated to a good cause!</h2>
    </div>
    }
    </>
  )
}
