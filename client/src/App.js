import React, {useState} from 'react';
import './App.css';
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
