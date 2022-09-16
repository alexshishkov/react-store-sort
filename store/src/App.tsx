import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Header from 'components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import PageNotFound from 'components/PageNotFound/PageNotFound';
import Store from 'components/Store/Store';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/Store" element={<Store />} />
        <Route path="/" element={<Store />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
