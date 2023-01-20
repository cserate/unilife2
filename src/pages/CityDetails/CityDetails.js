import React from 'react'
import Banner from '../../components/Banner/Banner'
import students from '../../assets/students.png'
import './CityDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PropertyCard from '../../components/PropertyCard/PropertyCard'

function CityDetails() {
    const baseUrl = "https://unilife-server.herokuapp.com";
    
    //need city id from url 
    const {cityid}= useParams()
    // console.log(id)

    //create state to hold city
    const [city, setCity] = React.useState()

    //create state to hold properties
    const [properties, setProperties] = React.useState([])

    // //create state to hold num of properties
    // const [numProperties, setNumProperties] = React.useState(0)

    //call api to direct to correct city
   React.useEffect(
        ()=>{
             //call api to get properties
             axios.get(`${baseUrl}/properties/city/${cityid}`)
             // https://unilife-server.herokuapp.com/cities
             .then (res =>{
                // console.log(res.data);
                // console.log(res.data.response);
               //store the data from the api into state
              setProperties(res.data.response)
              // setNumProperties(res.data.total)
             })
             .catch(err => console.log(err))

             //also need description data for specific city
             //https://unilife-server.herokuapp.com/cities/633a96b96893d471a68cc891
             axios.get(`${baseUrl}/cities/${cityid}`)
             .then (res => {
                console.log(res.data.data[0]);
                //store in state
                setCity(res.data.data[0])
             })
             .catch(err => console.log(err))
       }, []
       )

    
  return (
    <div className='city-details-page'>
        <Banner />
        <p className='search-bar'>Search Bar</p>
        <div className='city-property-count'>
            {/* <h3>{properties.length} in {properties[0]?.address.city}</h3>    */}
            <h3>{city?.property_count} in {city?.name}</h3>
        </div>
        <div className='property-cards-container'>
           {
            properties.map(item => <PropertyCard     
                                          key={item._id}
                                          property={item} />)
                                        //   image={item.images[0]} 
            }
                              
        </div>
        <div className='about-city-container'>
            <div className='left-side-city'>
                <h3>Being a student in {city?.name}</h3> 
                <p>{city.student_life}</p>
            </div>
            <img className='students' src={students} />
         </div> 
    </div>
  )
}

export default CityDetails