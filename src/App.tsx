import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './Components/Header';
import NavBar from './Components/Navbar';
import Routes from './routes';
import GlobalCss from './assets/styles/global';
import AppProvider from './hooks/appProvider';

const App = () => (
  <BrowserRouter>
    <AppProvider>
      <Header />
      <NavBar />
      <Routes />
      <GlobalCss />
      <ToastContainer autoClose={3000} />
    </AppProvider>
  </BrowserRouter>
);

export default App;
