import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';
import { useState } from 'react';
import './App.css';
import '../src/styles/components/layout/normalize.css';


import HomePage from './pages/HomePage';
import InicioPage from './pages/InicioPage';
import FabricaPage from './pages/FabricaPage';
import ProductosPage from './pages/ProductosPage';
import GaleriaPage from './pages/GaleriaPage';
import EfemeridesPage from './pages/EfemeridesPage';
import ContactoPage from './pages/ContactoPage';

import Layout from './components/Layout.js';


function App() {
  return (
      <BrowserRouter>        
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/inicio' element={<Layout><InicioPage/></Layout>} />
            <Route path='/productos' element={<Layout><ProductosPage/></Layout>} />
            <Route path='/fabrica' element={<Layout><FabricaPage/></Layout>} />
            <Route path='/efemerides' element={<Layout><EfemeridesPage/></Layout>} />
            <Route path='/galeria' element={<Layout><GaleriaPage/></Layout>} />
            <Route path='/contacto' element={<Layout><ContactoPage/></Layout>} />
          </Routes>
      </BrowserRouter>
  );
};

export default App;
