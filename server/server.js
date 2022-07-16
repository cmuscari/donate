const express = require('express');
const path = require("path");
//import ApolloServer
const { ApolloServer } = require('apollo-server-express');
//import our typeDefs and resolvers
const{ typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
require('dotenv').config();
const db = require('./config/connection');
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);
const bodyParser = require('body-parser');
const cors = require('cors');
const { application } = require('express');

const PORT = process.env.PORT || 3001;
// create a new Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

//TODO: Fix bodyParser calls and move function if necessary
app.post('/donate', cors(), async (req, response) =>{
    let { amount, id } = req.body

    try {
        // async function straight from stripe api to get payment info/object
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "Donation to online charity board, 'Donate'",
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


// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  // integrate our Apollo server with the Express application as middleware
  server.applyMiddleware({ app });
  // Serve up static assets, following two come into effect when we go into production
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
  }

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      // log where we can go to test our GQL API
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
