const express = require('express');
const app = express();
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);
const bodyParser = require('body-parser');
const cors = require('cors');
const { application } = require('express');

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());

app.use(cors());

app.post('/donate', cors(), async (req, response) =>{
    let { amount, id } = req.body

    try {
        // async function straight from stripe api to get payment info/object
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "Donation to online charity board",
            payment_method: id,
            confirm: true
        })
        console.log("Payment", payment)
        response.json({
            message: "Payment successful",
            success: true
        })
    } catch (error) {
        console.log("Error", error)
        response.json({
            message: "Payment failed",
            success: false
        })
    }
});