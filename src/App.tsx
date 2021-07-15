import React from 'react';
import { BrowserRouter } from 'react-router-dom';
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
    </AppProvider>
  </BrowserRouter>
);

export default App;
