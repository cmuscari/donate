import React, {useState} from 'react';
import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './utils/globalstate';

import { setContext } from '@apollo/client/link/context';
import Login from './pages/Login';
import Album from './components/Homepage'
import Header from './components/Header'
import Footer from './components/Footer'
import OrgForm from './components/OrgForm';
import SignUpPage from './pages/SignUp';
import SingleOrg from './pages/SingleOrg';
import DonatePage from './pages/Donate';
import Homepage from './pages/Home';
import CategoryPage from './components/CategoryPage';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

// With the configuration of authLink, we use the setContext() function to retrieve the token from localStorage and set the HTTP request headers of every request to include the token, whether the request needs it or not.
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  const [showItem, setShowItem] = useState(false);

  return (
    <ApolloProvider client={client}>
      <StoreProvider>
      <Router>
        <div className="">
          <div className="-footer">
            <Header />
            <div className="content">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/post" element={<OrgForm />} />
                <Route path="/organization/:id" element={<SingleOrg />} />
                <Route path='/donate' element={<DonatePage />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
      </StoreProvider>
    </ApolloProvider>
  );
}

export default App;