import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage';
import SeeAllCities from './pages/SeeAllCities/SeeAllCities';
import Footer from './components/Footer/Footer';



function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Header /> 
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/seeallcities' element={<SeeAllCities />} />
          </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
