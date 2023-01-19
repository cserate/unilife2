import React from 'react'
import Banner from '../../components/Banner/Banner'
import students from '../../assets/students.png'
import './CityDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PropertyCard from '../../components/PropertyCard/PropertyCard'

function CityDetails({city, property}) {
    const baseUrl = "https://unilife-server.herokuapp.com";
    
    //need city id from url 
    const {id}= useParams()
    // console.log(id)

    // //create state to hold cities
    // const [cities, setCities] = React.useState([])

    //create state to hold properties
    const [properties, setProperties] = React.useState([])


// React.useEffect(
//   ()=>{
//       //call api to get cities
//       axios.get(`${baseUrl}/cities`)
//       // https://unilife-server.herokuapp.com/cities
//       .then (res =>{
//         console.log(res.data.response);
//         //store the data from the api into state
//         setCities(res.data.response)
//       })
//       .catch(err => console.log(err))
// }, []
// )

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
        <div className='city-property-count'>
            {/* I can't figure this out! */}
            {/* <h3>`${city.property_count} in ${city.name}`</h3>   */}
        </div>
        <div className='property-cards-container'>
           {
            properties.map(item => <PropertyCard     
                                          key={item._id}
                                          property={item} 
                                          image={item.images[0]} />)
            }
                              
        </div>
        <div className='about-city-container'>
            <div className='left-side-city'>
               {/* I can't figure this out! */}
                {/* <h3>`Being a student in ${property.address.city}</h3> */}
                <p>?api data</p>
            </div>
            <img className='students' src={students} />
            
         </div> 
    </div>
  )
}

export default CityDetails