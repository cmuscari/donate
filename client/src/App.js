import './App.css';
import StripeContainer from '../components/StripeContainer';
import { useState } from 'react';

function App() {
  // state for stripe payments
  const [showItem, setShowItem ] = useState(false);

  //TODO: Set up button styling and login for onClick
  //TODO: GET FRONT END CODE AND ADD BUTTON AND LOGIC IN APP RETURN
  return (
    <main> Our App Content Here </main>
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Album from './components/Homepage'
import Header from './components/Header'
import Footer from './components/Footer'
import OrgForm from './components/OrgForm';
import SignUpPage from './pages/SignUp';
import SingleOrg from './pages/SingleOrg';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

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



function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="">
          <div className="-footer">
            <Header />
            <div className="">
              <Routes>
                <Route path="/" element={<Album />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/post" element={<OrgForm />} />
                <Route path="/organization/:id" element={<SingleOrg />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );

}

export default App;
