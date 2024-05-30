import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/styles.css'; // Ensure your styles are correctly pointed

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
