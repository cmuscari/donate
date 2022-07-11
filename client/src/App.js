import './App.css';
import StripeContainer from '../components/StripeContainer';
import { useState } from 'react';

function App() {
  // state for stripe payments
  const [showItem, setShowItem ] = useState(false);

  //TODO: Set up button styling and login for onClick

  return (
    <main> Our App Content Here </main>
  );
  
}

export default App;
