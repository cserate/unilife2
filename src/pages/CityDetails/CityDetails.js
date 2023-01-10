import React from 'react'
import Banner from '../../components/Banner/Banner'
// import students from '../../../assets/person.png'
import './CityDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PropertyCard from '../../components/PropertyCard/PropertyCard'

function CityDetails({property}) {
    const baseUrl = "https://unilife-server.herokuapp.com";
    

    //create state to hold cities
    const [cities, setCities] = React.useState([])
    const [properties, setProperties] = React.useState([])


    //call api to direct to correct city
    React.useEffect(
       ()=>{
            //call api to get cities
            axios.get(`${baseUrl}/cities`)
            // https://unilife-server.herokuapp.com/cities
            .then (res =>{
              console.log(res.data.response);
              //store the data from the api into state
             setCities(res.data.response)
        
            })
            .catch(err => console.log(err))
      }, []
      )
      React.useEffect(
        ()=>{
             //call api to get properties
             axios.get(`${baseUrl}/properties/city/:city_id`)
             // https://unilife-server.herokuapp.com/cities
             .then (res =>{
               console.log(res.data.response);
               //store the data from the api into state
              setProperties(res.data.response)
         
             })
             .catch(err => console.log(err))
       }, []
       )

    
  return (
    <div className='city-details-page'>
        <p>Hello World</p>
        <Banner />
        <p>Search Bar</p>
        <div className='home-cards-container'>
            <h3>? homes in ?</h3>
            
            properties.map(item=> <PropertyCard     
                                          property={item} 
                                          image={item.images}
                                           />)

                               />
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