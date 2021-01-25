import React from 'react';
import Routes from './routes';
import NavBar from './components/NavBar/nav-home';
import Footer from './components/Footer/footer-home';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
