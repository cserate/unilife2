import React from 'react'
import './HomeDetail.css'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import {MdBed, MdOutlineBathtub} from 'react-icons/md'

function HomeDetail() {
    const baseUrl = "https://unilife-server.herokuapp.com";
    
    //need home id from url 
    const {homeid}= useParams()
    // console.log(homeid)

    //create state to hold home data
    const [home, setHome] = React.useState([])

    //call api to get detailed info about specific property
    React.useEffect(
        ()=>{
             //call api to get home detaila
             axios.get(`${baseUrl}/properties/${homeid}`)
            //  https://unilife-server.herokuapp.com/properties/633d453061f49f86a21caa13
             .then (res =>{
               console.log(res.data);
               //store the data from the api into state
              setHome(res.data)
             })
             .catch(err => console.log(err))
       }, []
       )
  return (
    <div className='home-detail-container'>
        <div className='top-row'>
            <div className='photo-grid'>
              <img className='home' src={home.images} />
            </div>
            <div className='property-overview'>
              <div className='address'>
                <h2>{home.address?.street}, {home.address?.city}</h2>
                <h2>{home.address?.postcode}</h2>
              </div>
              <div className='row1-titles'>
                <small>Bedrooms</small>
                <small>Bathrooms</small>
                <small>Property Type</small>
              </div>
              <div className='row1-icons'>
                  <div className='bedroom-info'>
                    <MdBed />
                    <small>{home.bedroom_count}</small>
                  </div>
                  <div className='bathroom-info'>
                    <MdOutlineBathtub />
                    <small>{home.bathroom_count}</small>
                  </div>
                  <div className='property-type-info'>
                  <small>{home.property_type}</small>
                  </div>
              </div>
              
            </div>
        </div>

    </div>
  )
}

export default HomeDetail