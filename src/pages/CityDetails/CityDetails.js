import React from 'react'
import Banner from '../../components/Banner/Banner'
// import students from '../../../assets/person.png'
import './CityDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PropertyCard from '../../components/PropertyCard/PropertyCard'

function CityDetails({property, length, address}) {
    const baseUrl = "https://unilife-server.herokuapp.com";
    
    //need city id from url 
    const {id}= useParams()

    // console.log(id)

    //create state to hold properties
    const [properties, setProperties] = React.useState([])
    // const [numProperties, setNumProperties] = React.useState([])

    //call api to direct to correct city
   React.useEffect(
        ()=>{
             //call api to get properties
             axios.get(`${baseUrl}/properties/city/${id}`)
             // https://unilife-server.herokuapp.com/cities
             .then (res =>{
               console.log(res.data.response);
               //store the data from the api into state
              setProperties(res.data.response)
              // setNumProperties(res.data.total)
             })
             .catch(err => console.log(err))
       }, []
       )

    
  return (
    <div className='city-details-page'>
        <Banner />
        <p className='search-bar'>Search Bar</p>
        <div className='property-cards-container'>
            {/* <h3>{`${length} homes in ${property.address.city}`}</h3>
             */}
            {
            properties.map(item => <PropertyCard     
                                          
                                          property={item} 
                                          image={item.images[0]} 
                                          length={item.length}
                                          address={item.address.city}/>)
            }
                              
        </div>
        <div className='about-city-container'>
            <div className='left-side-city'>
                {/* <h3>Being a student in {property.address.city}</h3> */}
                <p>?api data</p>
            </div>
            {/* <img src='`${students} `'/> */}
            
         </div> 
    </div>
  )
}

export default CityDetails