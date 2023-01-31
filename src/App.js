import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage';
import SeeAllCities from './pages/SeeAllCities/SeeAllCities';
import Footer from './components/Footer/Footer';
import CityDetails from './pages/CityDetails/CityDetails';
import HomeDetail from './pages/HomeDetail/HomeDetail';
import BookViewing from './pages/BookViewing/BookViewing';




function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Header /> 
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/seeallcities' element={<SeeAllCities />} />
            <Route path='/citydetails/:cityid' element={<CityDetails />} />
            <Route path='/homedetail/:homeid' element={<HomeDetail />} />
            <Route path='/bookviewing/:homeid' element={<BookViewing />} />
          </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
