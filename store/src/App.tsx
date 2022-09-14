import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import React from 'react';
import Header from 'components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
