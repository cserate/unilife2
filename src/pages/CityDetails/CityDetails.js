import React from 'react'
import Banner from '../../components/Banner/Banner'
import HomeCards from '../../components/HomeCards/HomeCards'
// import students from '../../../assets/person.png'
import './CityDetails.css'

function CityDetails() {
  return (
    <div className='city-details-page'>
        <Banner />
        <p>Search Bar</p>
        <div className='home-cards-container'>
            <h3>? homes in Leeds</h3>
            <HomeCards />
        </div>
        <div className='about-city-container'>
            <div className='left-side-city'>
                <h3>Being a student in ?</h3>
                <p>?api data</p>
            </div>
            {/* <img src='`${students} `'/> */}
            
        </div>
    </div>
  )
}

export default CityDetails