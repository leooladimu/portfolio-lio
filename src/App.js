import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ContactForm from './components/ContactForm';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/ContactForm" element={<ContactForm />} />
        </Routes>
        <div style={{height: '50px'}}></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
