import React from 'react'
import Banner from '../../components/Banner/Banner'
import HomeCards from '../../components/HomeCards/HomeCards'
// import students from '../../../assets/person.png'
import './CityDetails.css'
import { useParams } from 'react-router-dom'

function CityDetails() {

    const cityId
  return (
    <div className='city-details-page'>
        <p>Hello World</p>
        {/* <Banner />
        <p>Search Bar</p>
        <div className='home-cards-container'>
            <h3>? homes in {}</h3>
            <HomeCards />
        </div>
        <div className='about-city-container'>
            <div className='left-side-city'>
                <h3>Being a student in ?</h3>
                <p>?api data</p>
            </div>
            {/* <img src='`${students} `'/> */}
            
        {/* </div>  */}
    </div>
  )
}

export default CityDetails