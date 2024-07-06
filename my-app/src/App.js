import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import MainPage from './Components/MainPage';
import AboutUs from './Components/AboutUs';
import PricePage from './Components/PricePage';
import ContactPage from './Components/ContactPage';
import Clients from './Components/Clients';
import LoadingImage from './Components/Photo/Group 10.svg';
import StartProject from './Components/StartProject';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [imageSize, setImageSize] = useState(500);
  const [isIncreasing, setIsIncreasing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const pulseAnimation = setInterval(() => {
      if (isIncreasing && imageSize < 600) {
        setImageSize(size => size + 5);
      } else {
        setImageSize(size => size - 5);
        if (imageSize <= 500) {
          setIsIncreasing(true);
        }
      }
    }, 100);

    return () => clearInterval(pulseAnimation);
  }, [imageSize, isIncreasing]);

  return (
    <Router>
      {isLoading ? (
        <div style={{ position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={LoadingImage} alt="Loading" style={{ width: `${imageSize}px`, height: `${imageSize}px`, animation: 'pulse 1s infinite' }} />
        </div>
      ) : (
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/Price" element={<PricePage />} />
            <Route path="/Contact" element={<ContactPage />} />
            <Route path="/Clients" element={<Clients />} />
            <Route path="/StartProject" element={<StartProject />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;