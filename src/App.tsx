import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import NavBar from './Components/Navbar';
import Routes from './routes';
import GlobalCss from './assets/styles/global';

const App = () => (
  <BrowserRouter>
    <Header />
    <NavBar />
    <Routes />
    <GlobalCss />
  </BrowserRouter>
);

export default App;
