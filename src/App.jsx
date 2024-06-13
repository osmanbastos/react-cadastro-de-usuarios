import './App.css';
import React, { useState } from 'react';
import UserForm from './components/UserForm';
import Logo from './components/templates/logo/Logo.jsx';
import Nav from './components/templates/nav/Nav.jsx';
import Main from './components/templates/main/Main.jsx';
import Footer from './components/templates/footer/Footer.jsx';


const App = () => {
  return (
    <>
      <Logo />
      <Nav />
      <Main />
      <Footer />
    </>
  );
};

export default App;
